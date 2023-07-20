import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { HiTrash } from "react-icons/hi";
import {
  useCreateCompanyMutation,
  useCreateLowonganMutation,
  useDeleteLowonganMutation,
  useGetCompanyQuery,
  useGetLowonganQuery,
} from "../redux/company.slice";

const CreateJobPages = () => {
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState();

  const { data: rawCompany } = useGetCompanyQuery();
  const { data: lowongan } = useGetLowonganQuery();
  const [createCompany] = useCreateCompanyMutation();
  const [createLowongan] = useCreateLowonganMutation();
  const [deleteLowongan] = useDeleteLowonganMutation();

  useEffect(() => {
    const result = rawCompany?.map((data) => {
      return {
        label: data.namaPerusahaan,
        value: data.companyId,
      };
    });
    setCompany(result);
  }, [rawCompany]);

  const jobForm = useForm({
    defaultValues: {
      posisi: "",
      daerahPerusahaan: "",
      kualifikasi: [""],
    },
  });

  const companyForm = useForm({
    defaultValues: {
      namaPerusahaan: "",
    },
  });

  const {
    register: jobFormRegister,
    control,
    handleSubmit: jobFormSubmit,
    reset: jobFormReset,
    setValue: jobFormSetValue,
  } = jobForm;

  const {
    register: companyFormRegister,
    handleSubmit: companyFormSubmit,
    control: companyFormControl,
    reset: companyFormReset,
  } = companyForm;

  const { fields, append, remove } = useFieldArray({
    name: "kualifikasi",
    control,
  });

  const handleJobListSubmit = async (data) => {
    await createLowongan(data);
    jobFormReset();
  };

  const handleCompanySubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "uemrpa6m");

      const uploadImage = await axios.post(
        "https://api.cloudinary.com/v1_1/del1943mz/image/upload",
        formData
      );

      if (uploadImage.status === 200) {
        const imageUrl = uploadImage.data.secure_url;

        const formPayload = {
          ...data,
          companyImageUrl: imageUrl,
        };

        await createCompany(formPayload);
        companyFormReset();
      } else {
        console.log("Error Occured");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.value);
    jobFormSetValue("companyId", e.value);
  };

  return (
    <div className="grid grid-cols-2 border-black">
      <div className="p-4 m-4 bg-white rounded-md border-black border-[1px]">
        <form
          noValidate
          onSubmit={companyFormSubmit(handleCompanySubmit)}
          className="flex flex-col gap-5 bg-white w-fit"
        >
          <h3>Create Company</h3>
          <input
            placeholder="Nama perusahaan"
            className="border-b-black border-b-[1px]"
            {...companyFormRegister("namaPerusahaan", { required: true })}
          />
          <p>Logo Perusahaan</p>
          <input
            type="file"
            {...companyFormRegister("image")}
            accept="image/jpg, image/jpeg, image/png, .svg"
          />
          {loading ? (
            <button
              disabled
              className="border-2 border-black active:bg-gray-500"
            >
              Submitting
            </button>
          ) : (
            <button
              className="border-2 border-black active:bg-gray-500"
              onSubmit={companyFormSubmit(handleCompanySubmit)}
            >
              Create Company
            </button>
          )}
        </form>
      </div>
      <div className="order-1 p-4 m-4 bg-white rounded-md border-black border-[1px]">
        <form
          noValidate
          onSubmit={jobFormSubmit(handleJobListSubmit)}
          className="flex flex-col gap-5 w-fit"
        >
          <h3>Create Job List</h3>
          <Controller
            name="companyId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={company}
                onChange={handleCompanyChange}
                value={company?.filter(function (option) {
                  return option.value === selectedCompany;
                })}
                placeholder="Pilih perusahaan"
              />
            )}
          />

          <input
            placeholder="posisi"
            {...jobFormRegister("posisi")}
            className="border-black border-b-[1px]"
          />
          <input
            placeholder="daerah"
            {...jobFormRegister("daerahPerusahaan")}
            className="border-black border-b-[1px]"
          />
          {fields?.map((field, index) => {
            return (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...jobFormRegister(`kualifikasi.${index}`)}
                  placeholder="kualifikasi"
                  className="border-black border-b-[1px]"
                />

                {index > 0 && (
                  <button onClick={() => remove(index)}>Remove</button>
                )}
              </div>
            );
          })}
          <button
            type="button"
            onClick={() => append("")}
            className="border-black active:bg-gray-500 border-[1px]"
          >
            add kualifikasi
          </button>
          <button
            type="submit"
            onClick={() => jobFormSubmit(handleJobListSubmit)}
            className="border-black active:bg-gray-500 border-[1px]"
          >
            List Job
          </button>
        </form>
      </div>
      <div className="overflow-auto row-span-2 gap-5 p-4 m-4 bg-white rounded-md border-black border-[1px] h-[50rem]">
        <h2 className="w-full font-bold border-b-2 border-b-black">
          Lowongan List
        </h2>
        {lowongan?.map((data) => {
          return (
            <div key={data.lowonganId} className="p-2 mt-2 border-2">
              <div className="flex justify-between items-center">
                <p className="font-bold">
                  {data.posisi} - {data.Company.namaPerusahaan}
                </p>
                <HiTrash
                  className="hover:cursor-pointer w-fit h-[1.5rem]"
                  onClick={() => deleteLowongan(data.lowonganId)}
                />
              </div>
              <p>Kualifikasi</p>
              {data?.kualifikasi[0]?.kualifikasiData?.map((data) => {
                return (
                  <ul key={data.id}>
                    <li>{data}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
      <DevTool control={companyFormControl} />
    </div>
  );
};

export default CreateJobPages;
