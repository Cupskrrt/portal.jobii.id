import { View, Text, StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  tableHead: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
  },
  tableRow: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
  },
  section: {
    borderTop: 1,
    borderColor: "black",
    gap: 4,
  },
  innerSection: {
    display: "flex",
    gap: 6,
    width: "33.3%",
  },
});

const AnakTable = ({ selectedApplicant }) => (
  <View style={style.section}>
    <View style={style.tableHead}>
      <View style={style.innerSection}>
        <Text>Nama</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Tanggal lahir</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Jenis kelamin</Text>
      </View>
    </View>
    <View>
      {selectedApplicant?.dataUser[0]?.Anak?.map((data, i) => (
        <View key={i} style={style.tableRow}>
          <View style={style.innerSection}>
            <Text>{data.namaAnak}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.tanggalLahir}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.jenisKelamin}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default AnakTable;
