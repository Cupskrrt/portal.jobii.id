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
    width: "50%",
  },
});

const KerjaTable = ({ selectedApplicant }) => (
  <View style={style.section}>
    <View style={style.tableHead}>
      <View style={style.innerSection}>
        <Text>Perusahaan</Text>
      </View>
      <View style={style.innerSection}>
        <Text>Tahun</Text>
      </View>
    </View>
    <View>
      {selectedApplicant?.dataUser[0]?.riwayatBekerja?.map((data, i) => (
        <View key={i} style={style.tableRow}>
          <View style={style.innerSection}>
            <Text>{data.namaPerusahaan}</Text>
          </View>
          <View style={style.innerSection}>
            <Text>
              {data.dariTahun} - {data.sampaiTahun}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </View>
);

export default KerjaTable;
