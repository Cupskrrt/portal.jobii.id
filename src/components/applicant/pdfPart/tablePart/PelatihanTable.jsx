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

const PelatihanTable = ({ selectedApplicant }) => (
  <View style={style.section}>
    <View style={style.tableHead}>
      <View style={style.innerSection}>
        <Text>Tipe Pelatihan</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Judul Pelatihan</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Tahun Pelatihan</Text>
      </View>
    </View>
    <View>
      {selectedApplicant?.dataUser[0]?.Pelatihan?.map((data, i) => (
        <View key={i} style={style.tableRow}>
          <View style={style.innerSection}>
            <Text>{data.tipe}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.judul}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>{data.tahun}</Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default PelatihanTable;
