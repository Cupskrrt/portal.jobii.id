import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller, set } from "react-hook-form";
import {
  fetchCompany,
  postCreateCompany,
  postJob,
} from "../utils/api/companyApi";
import Select from "react-select";

const CreateJobPages = () => {
  const [image, setImage] = useState();
  const [company, setCompany] = useState();
  const [selectedCompany, setSelectedCompany] = useState();

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

  const getCompany = async () => {
    const { data } = await fetchCompany();
    const result = data.map((data) => {
      return {
        label: data.namaPerusahaan,
        value: data.companyId,
      };
    });
    setCompany(result);
  };

  useEffect(() => {
    getCompany();
  }, []);

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
    setValue: companyFormSetValue,
    reset: companyFormReset,
  } = companyForm;

  const { fields, append, remove } = useFieldArray({
    name: "kualifikasi",
    control,
  });

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "uemrpa6m");

    if (image) {
      axios
        .post(
          "https://api.cloudinary.com/v1_1/del1943mz/image/upload",
          formData
        )
        .then((res) => {
          companyFormSetValue("companyImgUrl", res.data.secure_url);
        });
    }
  };

  const handleJobListSubmit = async (data) => {
    await postJob(data);
    jobFormReset();
  };

  const handleCompanySubmit = async (data) => {
    uploadImage();
    await postCreateCompany(data);
    companyFormReset();
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.value);
    jobFormSetValue("companyId", e.value);
  };

  return (
    <div className="border-2 border-black">
      <div className="p-4">
        <form noValidate onSubmit={companyFormSubmit(handleCompanySubmit)}>
          <h3>Create Company</h3>
          <input
            placeholder="Nama perusahaan"
            className="border-b-black border-b-[1px]"
            {...companyFormRegister("namaPerusahaan", { required: true })}
          />

          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button
            className="border-2 border-black"
            onSubmit={companyFormSubmit(handleCompanySubmit)}
          >
            Create Company
          </button>
        </form>
      </div>
      <div>
        <form noValidate onSubmit={jobFormSubmit(handleJobListSubmit)}>
          <h3>Create Job List</h3>
          <p>Please select company</p>
          <Controller
            name="companyId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={company}
                value={company?.filter(function(option) {
                  return option.value === selectedCompany;
                })}
                onChange={handleCompanyChange}
              />
            )}
          />

          <input placeholder="posisi" {...jobFormRegister("posisi")} />
          <input
            placeholder="daerah"
            {...jobFormRegister("daerahPerusahaan")}
          />
          {fields.map((field, index) => {
            return (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...jobFormRegister(`kualifikasi.${index}`)}
                  placeholder="kualifikasi"
                />

                {index > 0 && (
                  <button onClick={() => remove(index)}>Remove</button>
                )}
              </div>
            );
          })}
          <button type="button" onClick={() => append("")}>
            add kualifikasi
          </button>
          <button
            type="submit"
            onClick={() => jobFormSubmit(handleJobListSubmit)}
          >
            List Job
          </button>
        </form>
      </div>
      <DevTool control={control} />
    </div>
  );
};

export default CreateJobPages;
