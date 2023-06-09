import { StyleSheet, Text, View } from "@react-pdf/renderer";
import MedsosTable from "./tablePart/MedsosTable";

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

const PersonalData = ({ selectedApplicant, age }) => (
  <View style={style.page}>
    <Text style={style.title}>Data diri</Text>
    <View style={style.form}>
      {/* IDENTITAS SECTION */}
      <Text style={style.sectionTitle}>Identitas</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>Nama: {selectedApplicant?.dataUser[0]?.nama}</Text>
          <Text>Umur: {age}</Text>
          <Text>
            Jenis Kelamin: {selectedApplicant?.dataUser[0]?.jenisKelamin}
          </Text>
          <Text>No. KTP: {selectedApplicant?.dataUser[0]?.noKtp} </Text>
          <Text>NPWP: {selectedApplicant?.dataUser[0]?.npwp}</Text>
        </View>
        <View style={style.innerSection}>
          <Text>
            Kewarganegaraan: {selectedApplicant?.dataUser[0]?.kewarganegaraan}
          </Text>
          <Text>Agama: {selectedApplicant?.dataUser[0]?.agama}</Text>
          <Text>Tanggal Lahir: {selectedApplicant?.dataUser[0]?.ttl}</Text>
        </View>
      </View>
      {/* KONTAK SECTION */}
      <Text style={style.sectionTitle}>Kontak</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>Email: {selectedApplicant?.dataUser[0]?.email}</Text>
        </View>
        <View style={style.innerSection}>
          <Text>No. HP: {selectedApplicant?.dataUser[0]?.noHp}</Text>
        </View>
      </View>
      {/* MEDSOS SECTION */}
      <Text style={style.sectionTitle}>Medsos</Text>
      <MedsosTable selectedApplicant={selectedApplicant} />
      {/* FISIK SECTION */}
      <Text style={style.sectionTitle}>Fisik</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>
            Tinggi Badan: {selectedApplicant?.dataUser[0]?.tinggiBadan}
          </Text>
          <Text>Berat Badan: {selectedApplicant?.dataUser[0]?.beratBadan}</Text>
          <Text>
            Riwayat Sakit: {selectedApplicant?.dataUser[0]?.riwayatSakit}
          </Text>
          <Text>
            Golongan darah: {selectedApplicant?.dataUser[0]?.golonganDarah}
          </Text>
        </View>
        <View style={style.innerSection}>
          <Text>
            Vaksin satu:{" "}
            {selectedApplicant?.dataUser[0]?.vaksinCovid[0]?.vaksinSatu}
          </Text>
          <Text>
            Vaksin dua:{" "}
            {selectedApplicant?.dataUser[0]?.vaksinCovid[0]?.vaksinDua}
          </Text>
          <Text>
            Vaksin booster:
            {selectedApplicant?.dataUser[0]?.vaksinCovid[0]?.vaksinBooster}
          </Text>
        </View>
      </View>
      {/* MINAT SECTION */}
      <Text style={style.sectionTitle}>Minat</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>Hobi: {selectedApplicant?.dataUser[0]?.hobi}</Text>
        </View>
      </View>
      {/* ALAMAT SECTION */}
      <Text style={style.sectionTitle}>Alamat</Text>
      <View style={style.section}>
        <View style={style.innerSection}>
          <Text>
            Alamat Domisili: {selectedApplicant?.dataUser[0]?.alamatDomisili}
          </Text>
        </View>
        <View style={style.innerSection}>
          <Text>Alamat KTP: {selectedApplicant?.dataUser[0]?.alamatKtp}</Text>
        </View>
      </View>
    </View>
  </View>
);

export default PersonalData;
