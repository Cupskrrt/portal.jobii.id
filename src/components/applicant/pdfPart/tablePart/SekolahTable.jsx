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
    width: "25%",
  },
});

const SekolahTable = ({ selectedApplicant }) => (
  <View style={style.section}>
    <View style={style.tableHead}>
      <View style={style.innerSection}>
        <Text>Tingkat</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Nama sekolah</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Kota</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Jurusan</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Tahun lulus</Text>
      </View>
    </View>
    <View>
      {selectedApplicant?.dataUser[0]?.Pendidikan?.map((data, i) => (
        <View key={i} style={style.tableRow}>
          <View style={style.innerSection}>
            <Text>{data.tingkat_pendidikan}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.nama}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.kota}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.jurusan}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.tahunLulus}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default SekolahTable;
