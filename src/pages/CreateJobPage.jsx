import { DevTool } from "@hookform/devtools";
import { useFieldArray, useForm } from "react-hook-form";

const CreateJobPages = () => {
  const jobForm = useForm({
    defaultValues: {
      companyId: "",
      posisi: "",
      daerahPerusahaan: "",
      kualifikasi: [""],
    },
  });

  const {
    register: jobFormRegister,
    control,
    handleSubmit: jobFormSubmit,
    formState,
  } = jobForm;

  const { fields, append, remove } = useFieldArray({
    name: "kualifikasi",
    control,
  });

  const handleJobListSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="border-2 border-black">
      <div className="p-4">
        <form>
          <h3>Create Company</h3>
          <input
            placeholder="Nama perusahaan"
            className="border-b-black border-b-[1px]"
          />
          {/* TODO: Create file type input for company image */}

          <button className="border-2 border-black">Create Company</button>
        </form>
      </div>
      <div>
        <form noValidate onSubmit={jobFormSubmit(handleJobListSubmit)}>
          <h3>Create Job List</h3>
          <p>Please select company</p>
          {/* TODO: Create select component using react solect */}
          <select placeholder="company" {...jobFormRegister("companyId")}>
            <option value={"kontol"}>Test</option>
            <option value={"kontol2"}>Test2</option>
          </select>
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
