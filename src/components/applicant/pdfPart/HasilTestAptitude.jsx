import { StyleSheet, Text, View } from "@react-pdf/renderer";

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
    flexDirection: "column",
    borderTop: 1,
    borderColor: "black",
    gap: 4,
  },
  innerSection: {
    display: "flex",
    gap: 6,
    width: "50%",
    borderBottom: 0.5,
    borderColor: "black",
    padding: 2,
  },
  sectionTitle: {
    fontFamily: "roboto",
    fontWeight: "medium",
    fontSize: 13,
  },
});

const HasilTestAptitude = ({ selectedApplicant }) => {
  const stringPercentage = selectedApplicant
    ? selectedApplicant?.Aptitudess[0]?.rangeIq
    : "0%";
  const intPercentage = stringPercentage?.replace("%", "");

  return (
    <View style={style.page} break>
      <Text style={style.title}>Hasil Test Aptitude</Text>
      <View style={style.form}>
        {/* SECTION APTITUDE */}
        <Text style={style.sectionTitle}>Hasil Test Aptitude</Text>
        {/* SECTION 1 */}
        <View style={style.section}>
          {/* HEADER */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text style={[{ fontFamily: "roboto", fontWeight: "medium" }]}>
                Tipe Kecedasan
              </Text>
            </View>
            <View style={style.innerSection}>
              <Text style={[{ fontFamily: "roboto", fontWeight: "medium" }]}>
                Nilai
              </Text>
            </View>
          </View>
          {/* NUMERIK SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Numerik</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.numerik}/3</Text>
            </View>
          </View>
          {/* VERBAL SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Verbal</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.verbal}/19</Text>
            </View>
          </View>
          {/* INDUKTIF SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Induktif</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.induktif}/6</Text>
            </View>
          </View>
          {/* DIAGRAM SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Diagram</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.diagram}/19</Text>
            </View>
          </View>
          {/* SPASIAL SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Spasial</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.spasial}/6</Text>
            </View>
          </View>
          {/* LOGIKA SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Logika</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.Aptitudess[0]?.logika}/7</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={style.title}>Range IQ</Text>
      <View style={style.form}>
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <Text>Range IQ</Text>
          <Text>{stringPercentage}</Text>
          {intPercentage <= 40 ? (
            <Text>Kecerdasan sudah pasti lemah</Text>
          ) : intPercentage > 40 && intPercentage <= 50 ? (
            <Text>kecerdasan diambang kekurangan</Text>
          ) : intPercentage > 50 && intPercentage <= 60 ? (
            <Text>Kecerdasan dibawah rata-rata</Text>
          ) : intPercentage > 60 && intPercentage <= 70 ? (
            <Text>Kecerdasan normal atau rata-rata</Text>
          ) : intPercentage > 70 && intPercentage <= 80 ? (
            <Text>Kecerdasan superior</Text>
          ) : intPercentage > 80 && intPercentage <= 90 ? (
            <Text>Kecerdasan sangat superior</Text>
          ) : (
            <Text>Genius atau mendekati genius</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default HasilTestAptitude;
