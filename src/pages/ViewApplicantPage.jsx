import { useState, useEffect } from "react";
import ApplicantPdf from "../components/applicant/ApplicantPdf";
import { PDFViewer } from "@react-pdf/renderer";
import Select from "react-select";
import {
  useGetApplicantQuery,
  useGetCompanyQuery,
  useLazyGetSelectedApplicantQuery,
} from "../redux/company.slice";

const ViewApplicantPage = () => {
  const [selectedApplicant, setSelectedApplicant] = useState();
  const [selectedCompany, setSelectedCompany] = useState("");
  const [company, setCompany] = useState();

  const [getData] = useLazyGetSelectedApplicantQuery();
  const { data: applicant } = useGetApplicantQuery();
  const { data: rawCompany } = useGetCompanyQuery();

  const getSelectedApplicant = async (id) => {
    const { data: selectedApplicant } = await getData(id);
    setSelectedApplicant(selectedApplicant);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.value);
  };

  useEffect(() => {
    const result = rawCompany?.map((data) => {
      return {
        label: data.namaPerusahaan,
        value: data.namaPerusahaan,
      };
    });
    setCompany(result);
  }, [rawCompany]);

  const filteredApplicants = applicant?.filter(
    (data) => data?.daftarLowongan?.Company?.namaPerusahaan === selectedCompany
  );

  return (
    <div className="flex flex-row gap-5 p-5 h-screen">
      {/* FILTER */}
      <div className="flex flex-col max-h-screen rounded-md">
        <div className="mb-4">
          <label htmlFor="companyFilter" className="font-medium">
            Filter by Company:
          </label>
          <Select
            options={company}
            onChange={handleCompanyChange}
            value={company?.filter(function (option) {
              return option.value === selectedCompany;
            })}
            placeholder="Pilih perusahaan"
          />
        </div>

        {/* APPLICANT VIEWER */}
        <div className="flex flex-col max-h-screen rounded-md">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="text-sm font-light text-left">
                  <thead className="font-medium bg-white border-b dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="py-4 px-6">
                        Nama
                      </th>
                      <th scope="col" className="py-4 px-6">
                        Email
                      </th>
                      <th scope="col" className="py-4 px-6">
                        Posisi
                      </th>
                      <th scope="col" className="py-4 px-6">
                        Perusahaan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {filteredApplicants?.map((data) => {
                      return (
                        <tr
                          className="border-b dark:border-neutral-500"
                          key={data?.pendaftarId}
                          onClick={() => getSelectedApplicant(data?.userId)}
                        >
                          <td className="py-3 px-4 font-medium whitespace-normal">
                            {data?.dataUser?.nama}
                          </td>
                          <td className="py-3 px-4 whitespace-normal">
                            {data?.dataUser?.email}
                          </td>
                          <td className="py-3 px-4 whitespace-normal">
                            {data?.posisi}
                          </td>
                          <td className="py-3 px-4 whitespace-normal">
                            {data?.daftarLowongan?.Company?.namaPerusahaan}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF VIEWER */}
      <PDFViewer width={"70%"}>
        <ApplicantPdf selectedApplicant={selectedApplicant} />
      </PDFViewer>
    </div>
  );
};

export default ViewApplicantPage;
