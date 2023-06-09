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
    flexDirection: "column",
    borderTop: 1,
    borderColor: "black",
    gap: 4,
  },
  innerSection: {
    display: "flex",
    gap: 6,
    width: "33.3%",
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

const HasilTestPapikostik = ({ selectedApplicant }) => {
  const scores = selectedApplicant?.hasilPapikotes[0];

  return (
    <View style={style.page} break>
      <Text style={style.title}>Hasil Test Papikostik</Text>
      <View style={style.form}>
        {/* SECTION 1 */}
        <View style={style.section}>
          {/* HEADER */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text style={[{ fontWeight: "medium", fontFamily: "roboto" }]}>
                Peran
              </Text>
            </View>
            <View style={style.innerSection}>
              <Text style={[{ fontWeight: "medium", fontFamily: "roboto" }]}>
                Nilai
              </Text>
            </View>
            <View style={style.innerSection}>
              <Text style={[{ fontWeight: "medium", fontFamily: "roboto" }]}>
                Keterangan
              </Text>
            </View>
          </View>
          {/* G SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>G - Hard Intense Worked</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.G}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.G >= 3 && scores?.G <= 4 ? (
                  <Text>
                    Bekerja untuk kesenangan saja, bukan hasil optimal.
                  </Text>
                ) : scores?.G >= 4 && scores?.G <= 9 ? (
                  <Text>Kemauan bekerja keras tinggi.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* L SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>L - Leadership Role</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.L}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.L >= 5 && scores?.L <= 9 ? (
                  <Text>
                    Tingkat dimana seseorang memproyeksikan dirinya sebagai
                    pemimpin suatu tingkat dimana ia mencoba menggunakan orang
                    lain untuk mencapai tujuannya.
                  </Text>
                ) : (
                  <Text>
                    Cendurung tidak secara aktif menggunakan orang lain dalam
                    bekerja.
                  </Text>
                )}
              </Text>
            </View>
          </View>
          {/* I SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>I - Decision Making</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.I}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.I >= 0 && scores?.I <= 2 ? (
                  <Text>Ragu – menolak mengambil keputusan.</Text>
                ) : scores?.I >= 3 && scores?.I <= 4 ? (
                  <Text>Berhati-hati membuat keputusan.</Text>
                ) : scores?.I >= 5 && scores?.I <= 7 ? (
                  <Text>
                    Berhati-hati – lancar dan mudah mengambil keputusan.
                  </Text>
                ) : (
                  <Text>Tidak ragu dalam mengambil keputusan.</Text>
                )}
              </Text>
            </View>
          </View>
          {/* T SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>T - Pacing</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.T}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.T < 4 ? (
                  <Text>
                    Melakukan segala sesuatu menurut kemauannya sendiri.
                  </Text>
                ) : scores?.T >= 4 && scores?.T <= 6 ? (
                  <Text>Tergolong aktif secara internal dan mental.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* V SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>V - Vigorous Type</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.V}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.V < 5 ? (
                  <Text>Cenderung pasif.</Text>
                ) : scores?.V >= 5 && scores?.V <= 7 ? (
                  <Text>Aktif secara fisik, cenderung sportif.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* S SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>S - Social Extension</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.S}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.S < 6 ? (
                  <Text>
                    Perhatian rendah terhadap hubungan sosial, kurang percaya
                    pada orang lain.
                  </Text>
                ) : scores?.S >= 6 && scores?.S <= 9 ? (
                  <Text>
                    Kepercayaan tinggi dalam hubungan sosial, suka interaksi
                    sosial.
                  </Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* R SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>R - Theoritical Type</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.R}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.R >= 0 && scores?.R <= 4 ? (
                  <Text>Kurang perhatian, bersifat praktis.</Text>
                ) : scores?.R >= 5 && scores?.R <= 9 ? (
                  <Text>Nilai-nilai penalaran tergolong tinggi.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* D SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>D - Interest In Working With Details</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.D}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.D >= 0 && scores?.D <= 3 ? (
                  <Text>
                    Menyadari kebutuhan akan kecermatan, tetapi tidak berminat
                    bekerja secara detail.
                  </Text>
                ) : scores?.D >= 4 && scores?.D <= 9 ? (
                  <Text>Minat tinggi untuk bekerja secara detail.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* C SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>C - Organized Type</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.C}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.C >= 0 && scores?.C <= 2 ? (
                  <Text>Fleksibel – tidak teratur.</Text>
                ) : scores?.C >= 3 && scores?.C <= 5 ? (
                  <Text>Teratur tetapi tidak tergolong fleksibel.</Text>
                ) : scores?.C >= 6 && scores?.C <= 9 ? (
                  <Text>Keteraturan tinggi cenderung kaku.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* E SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>E - Emotional Restraint</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.E}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.E < 2 ? (
                  <Text>Terbuka, cepat bereaksi, tidak normative.</Text>
                ) : scores?.E >= 2 && scores?.E <= 3 ? (
                  <Text>Terbuka.</Text>
                ) : scores?.E >= 4 && scores?.E <= 6 ? (
                  <Text>
                    Punya pendekatan emosional seimbang, mampu mengendalikan.
                  </Text>
                ) : scores?.E > 6 ? (
                  <Text>
                    Sangat normative, kebutuhan pengendalian diri yang
                    berlebihan.
                  </Text>
                ) : null}
              </Text>
            </View>
          </View>
        </View>
        {/* SECTION 2  */}
        <View style={style.section}>
          {/* HEADER */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text style={[{ fontFamily: "roboto", fontWeight: "medium" }]}>
                Kebutuhan
              </Text>
            </View>
            <View style={style.innerSection}>
              <Text style={[{ fontFamily: "roboto", fontWeight: "medium" }]}>
                Nilai
              </Text>
            </View>
            <View style={style.innerSection}>
              <Text style={[{ fontFamily: "roboto", fontWeight: "medium" }]}>
                Keterangan
              </Text>
            </View>
          </View>
          {/* N SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>N - Need To Finish Task</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.N}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.N < 3 ? (
                  <Text>Menunda atau menghindari pekerjaan.</Text>
                ) : scores?.N >= 3 && scores?.N <= 4 ? (
                  <Text>Berhati-hati atau ragu dalam bekerja.</Text>
                ) : scores?.N >= 4 && scores?.N <= 6 ? (
                  <Text>Cukup bertanggung jawab pada pekerjaan.</Text>
                ) : scores?.N >= 6 && scores?.N <= 9 ? (
                  <Text>Tekun, tanggung jawab tinggi.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* A SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>A - Need To Achieve</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.A}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.A >= 0 && scores?.A <= 5 ? (
                  <Text>
                    Ketidakpastian tujuan, kepuasan dalam suatu pekerjaan, tidak
                    ada usaha lebih.
                  </Text>
                ) : scores?.A >= 6 && scores?.A <= 9 ? (
                  <Text>Tujuan jelas, kebutuhan sukses dan ambisi tinggi.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* P SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>P - Need To Control Other</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.P}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.P >= 5 && scores?.P <= 9 && (
                  <Text>
                    Tingkat kebutuhan untuk menerima tanggung jawab orang lain,
                    menjadi orang yang bertanggung jawab.
                  </Text>
                )}
                {scores?.P >= 0 && scores?.P <= 4 && (
                  <Text>
                    Menurunnya keinginan untuk bertanggung jawab pada pekerjaan
                    dan tindakan orang lain.
                  </Text>
                )}
              </Text>
            </View>
          </View>
          {/* X SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>X - Need To Be Noticed</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.X}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.X < 2 ? (
                  <Text>Cenderung pemalu.</Text>
                ) : scores?.X >= 2 && scores?.X <= 3 ? (
                  <Text>Rendah hati, tulus.</Text>
                ) : scores?.X >= 4 && scores?.X <= 5 ? (
                  <Text>Memiliki pola perilaku yang unik.</Text>
                ) : scores?.X >= 6 && scores?.X <= 9 ? (
                  <Text>Membutuhkan perhatian nyata.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* B SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>B - Need To Belong To Groups</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.B}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.B >= 0 && scores?.B <= 3 ? (
                  <Text>Selektif.</Text>
                ) : scores?.B >= 4 && scores?.B <= 5 ? (
                  <Text>
                    Butuh diterima, tapi tidak mudah dipengaruhi kelompok.
                  </Text>
                ) : scores?.B >= 6 && scores?.B <= 9 ? (
                  <Text>Butuh disukai dan diakui, mudah dipengaruhi.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* O SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>O - Need For Closeness And Affection</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.D}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.O < 3 ? (
                  <Text>Tidak suka hubungan perorangan.</Text>
                ) : scores?.O >= 3 && scores?.O <= 4 ? (
                  <Text>
                    Sadar akan hubungan perorangan, tapi tidak terlalu
                    tergantung.
                  </Text>
                ) : scores?.O >= 5 && scores?.O <= 9 ? (
                  <Text>Sangat tergantung, butuh penerimaan diri.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* Z SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>Z - Need For Change</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.Z}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.Z >= 0 && scores?.Z <= 2 ? (
                  <Text>Tidak suka berubah.</Text>
                ) : scores?.Z >= 3 && scores?.Z <= 4 ? (
                  <Text>Tidak suka perubahan jika dipaksakan.</Text>
                ) : scores?.Z >= 5 && scores?.Z <= 6 ? (
                  <Text>Mudah menyesuaikan diri.</Text>
                ) : scores?.Z >= 6 && scores?.Z <= 7 ? (
                  <Text>
                    Membuat perubahan yang selektif, berfikir jauh ke depan.
                  </Text>
                ) : scores?.Z >= 8 && scores?.Z <= 9 ? (
                  <Text>
                    Mudah gelisah, frustasi, karena segala sesuatu tidak
                    berjalan fantastis.
                  </Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* K SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>K - Need To Be Forceful / Aggresive</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.K}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.K >= 0 && scores?.K <= 2 ? (
                  <Text>
                    Menhindari masalah, menolak, untuk mengenali situasi sebagai
                    masalah.
                  </Text>
                ) : scores?.K >= 3 && scores?.K <= 4 ? (
                  <Text>Suka lingkungan tenang, menghindari konflik.</Text>
                ) : scores?.K === 5 ? (
                  <Text>Keras kepala.</Text>
                ) : scores?.K >= 6 && scores?.K <= 7 ? (
                  <Text>
                    Agresi berhubungan dengan kerja, dorongan semangat bersaing.
                  </Text>
                ) : scores?.K >= 8 && scores?.K <= 9 ? (
                  <Text>Agresif, cenderung defensif.</Text>
                ) : null}
              </Text>
            </View>
          </View>
          {/* F SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>F - Need To Support Authority</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.F}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.F >= 6 && scores?.F <= 9 ? (
                  <Text>
                    Bersikap setia dan membantu, kemungkinan bantuannya bersifat
                    politis.
                  </Text>
                ) : scores?.F >= 4 && scores?.F <= 5 ? (
                  <Text>Setia terhadap perusahaan.</Text>
                ) : scores?.F >= 2 && scores?.F <= 3 ? (
                  <Text>Mengurus kepentingan sendiri.</Text>
                ) : (
                  <Text>Cenderung egois, kemungkinan bisa memberontak.</Text>
                )}
              </Text>
            </View>
          </View>
          {/* W SECTION */}
          <View style={[{ display: "flex" }, { flexDirection: "row" }]}>
            <View style={style.innerSection}>
              <Text>W - Need For Rules And Supervision</Text>
            </View>
            <View style={style.innerSection}>
              <Text>{selectedApplicant?.hasilPapikotes[0]?.W}</Text>
            </View>
            <View style={style.innerSection}>
              <Text>
                {scores?.W < 4 ? (
                  <Text>Berorientasi pada tujuan, mandiri.</Text>
                ) : scores?.W >= 4 && scores?.W <= 5 ? (
                  <Text>
                    Kebutuhan akan pengarahan dan harapan yang dirumuskan
                    untuknya.
                  </Text>
                ) : scores?.W >= 6 && scores?.W <= 9 ? (
                  <Text>
                    Meningkatnya orientasi terhadap tugas dan membutuhkan
                    instruksi yang jelas.
                  </Text>
                ) : null}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HasilTestPapikostik;
