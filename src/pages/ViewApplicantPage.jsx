import { useState, useEffect } from "react";
import ApplicantPdf from "../components/applicant/ApplicantPdf";
import { PDFViewer } from "@react-pdf/renderer";

const ViewApplicantPage = () => {
  const [applicant, setApplicant] = useState();
  const [selectedApplicant, setSelectedApplicant] = useState();

  return (
    <div className="flex flex-row gap-5">
      {/* APPLICANT VIEWER */}
      <div className="flex flex-col h-[53.5rem] max-w-[50%]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="text-sm font-light text-left">
                <thead className="font-medium border-b dark:border-neutral-500">
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
                <tbody>
                  {applicant?.map((data) => {
                    return (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={data?.pendaftarId}
                        onClick={() => getSelectedApplicant(data?.userId)}
                      >
                        <td className="py-4 px-6 font-medium whitespace-nowrap">
                          {data?.dataUser?.nama}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {data?.dataUser?.email}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {data?.posisi}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
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
      {/* PDF VIEWER */}
      <PDFViewer width={"60%"}>
        <ApplicantPdf selectedApplicant={selectedApplicant} />
      </PDFViewer>
    </div>
  );
};

export default ViewApplicantPage;
