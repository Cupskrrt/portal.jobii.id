import { StyleSheet, Text, View } from "@react-pdf/renderer";
import SekolahTable from "./tablePart/SekolahTable";
import PelatihanTable from "./tablePart/PelatihanTable";
import KerjaTable from "./tablePart/KerjaTable";

const style = StyleSheet.create({
  title: {
    textAlign: "left",
    fontSize: 15,
    fontFamily: "roboto",
    fontWeight: "medium",
    padding: 5,
    backgroundColor: "black",
    color: "white",
  },
  form: {
    padding: 5,
    border: 2,
    borderColor: "black",
    gap: 6,
  },
  page: {
    gap: 6,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    borderTop: 1,
    borderColor: "black",
    gap: 4,
  },
  innerSection: {
    display: "flex",
    gap: 6,
    minWidth: "50%",
  },
  sectionTitle: {
    fontFamily: "roboto",
    fontWeight: "medium",
    fontSize: 13,
  },
});

const EducationData = ({ selectedApplicant, age }) => (
  <View style={style.page} break>
    <Text style={style.title}>Data Pendidikan</Text>
    <View style={style.form}>
      <Text style={style.sectionTitle}>Riwayat Sekolah</Text>
      <SekolahTable selectedApplicant={selectedApplicant} />
      <Text style={style.sectionTitle}>Riwayat Pelatihan</Text>
      <PelatihanTable selectedApplicant={selectedApplicant} />
      <Text style={style.sectionTitle}>Riwayat Bekerja</Text>
      <KerjaTable selectedApplicant={selectedApplicant} />
    </View>
  </View>
);

export default EducationData;
