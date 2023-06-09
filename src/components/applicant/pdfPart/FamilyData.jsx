import { StyleSheet, Text, View } from "@react-pdf/renderer";
import AnakTable from "./tablePart/AnakTable";

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

const FamilyData = ({ selectedApplicant }) => (
  <View style={style.page} break>
    <Text style={style.title}>Data Keluarga</Text>
    <View style={style.form}>
      {/* SAUDARA SECTION */}
      <Text style={style.sectionTitle}>Saudara</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>
            Jumlah Saudara: {selectedApplicant?.dataUser[0]?.jumlahSaudara}
          </Text>
        </View>
        <View style={style.innerSection}>
          <Text>Anak ke: {selectedApplicant?.dataUser[0]?.anakKe}</Text>
        </View>
      </View>
      {/* ORANG TUA SECTION */}
      <Text style={style.sectionTitle}>Orang Tua</Text>
      <View
        style={
          (style.section,
          [
            { flexDirection: "column", gap: 4 },
            { borderTop: 1 },
            { borderColor: "black" },
          ])
        }
      >
        <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
          <View style={style.innerSection}>
            <Text>
              Nama Bapak: {selectedApplicant?.dataUser[0]?.namaOrangTuaLaki}
            </Text>
            <Text>
              Pekerjaan Bapak:{" "}
              {selectedApplicant?.dataUser[0]?.pekerjaanOrangtuaLaki}
            </Text>
          </View>
          <View style={style.innerSection}>
            <Text>
              Nama Ibu: {selectedApplicant?.dataUser[0]?.namaOrangtuaPerempuan}
            </Text>
            <Text>
              Pekerjaan Ibu:{" "}
              {selectedApplicant?.dataUser[0]?.pekerjaanOrangtuaPerempuan}
            </Text>
          </View>
        </View>
        <View style={style.innerSection}>
          <Text>
            Alamat Orangtua: {selectedApplicant?.dataUser[0]?.alamatOrangtua}
          </Text>
        </View>
      </View>
      {/* PASANGAN SECTION */}
      <Text style={style.sectionTitle}>Pasangan</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>
            Status Menikah: {selectedApplicant?.dataUser[0]?.statusPerkawinan}
          </Text>
        </View>
        <View style={style.innerSection}>
          <Text>
            Nama Pasangan: {selectedApplicant?.dataUser[0]?.namaPasangan}
          </Text>
          <Text>
            Pekerjaan Pasangan:{" "}
            {selectedApplicant?.dataUser[0]?.pekerjaanPasangan}
          </Text>
        </View>
      </View>
      {/* ANAK SECTION */}
      <Text style={style.sectionTitle}>Anak</Text>
      <AnakTable selectedApplicant={selectedApplicant} />
    </View>
  </View>
);

export default FamilyData;
