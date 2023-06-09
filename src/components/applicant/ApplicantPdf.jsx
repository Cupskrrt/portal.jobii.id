import Roboto from "../../assets/fonts/Roboto-Regular.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import PersonalData from "./pdfPart/PersonalData";
import FamilyData from "./pdfPart/FamilyData";
import EducationData from "./pdfPart/EducationData";
import HasilTestPapikostik from "./pdfPart/HasilTestPapikostik";
import HasilTestAptitude from "./pdfPart/HasilTestAptitude";

Font.register({
  family: "roboto",
  fonts: [{ src: Roboto }, { src: RobotoMedium, fontWeight: "medium" }],
});

const style = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    fontSize: 12,
    gap: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "roboto",
    fontWeight: "medium",
    padding: 10,
  },
});

const ApplicantPdf = ({ selectedApplicant }) => {
  const dob = selectedApplicant?.dataUser[0]?.ttl;

  const getAge = (dob) => {
    const dobDate = new Date(dob);
    const currDate = new Date();

    let age = currDate.getFullYear() - dobDate.getFullYear();

    if (
      currDate.getMonth() < dobDate.getMonth() ||
      (currDate.getMonth() === dobDate.getMonth() &&
        currDate.getDate() < dobDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const currAge = getAge(dob);

  return (
    <>
      <Document>
        <Page size={"A4"} style={style.page}>
          <View>
            <Text style={style.title}>Form Datadiri</Text>
          </View>
          <PersonalData selectedApplicant={selectedApplicant} age={currAge} />
          <FamilyData selectedApplicant={selectedApplicant} />
          <EducationData selectedApplicant={selectedApplicant} />
          <HasilTestPapikostik selectedApplicant={selectedApplicant} />
          <HasilTestAptitude selectedApplicant={selectedApplicant} />
        </Page>
      </Document>
    </>
  );
};

export default ApplicantPdf;
