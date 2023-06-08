const buyurtmachi = document.querySelector('#Buyurtmachi');
const hisobotRoyhatiRaqami = document.querySelector('#Hisobot-royxatga-olish-raqami');
const hisobotTuzilganSanasi = document.querySelector('#Hisobot-tuzilgan-sanasi');
const baholashSanasi = document.querySelector('#baholash-sanasi');
const avtotransportVositasiRusumi =  document.querySelector('#Avtotransport-vositasi-rusumi');
const avtotransportVositasiTuri =  document.querySelector('#Avtotransport-vositasi-turi');
const avtotransportVositasiDavlatRaqami = document.querySelector('#Avtotransport-vositasi-davlat-raqami');
const avtotransportVositasiIshlanganYili = document.querySelector('#Avtotransport-vositasi-ishlangan-yili');
const baholashObyektiJoylashganManzili = document.querySelector('#Baholash-obyekti-joylashgan-manzili');
const baholashObyektiningEgasi = document.querySelector('#baholash-obyektining-egasi');
const baholashdanMaqsad = document.querySelector('#Baholashdan-maqsad');



document.querySelector('.app-container__calculate-btn').addEventListener('click', function (e) {
    
        let myWindow = window.open('', 'PRINT', '');

        myWindow.document.write(getPopulatedHTML({
            buyurtmachi: buyurtmachi.value,
            hisobotRoyhatiRaqami: hisobotRoyhatiRaqami.value,
            hisobotTuzilganSanasi: hisobotTuzilganSanasi.value,
            baholashSanasi: baholashSanasi.value,
            avtotransportVositasiDavlatRaqami: avtotransportVositasiDavlatRaqami.value,
            avtotransportVositasiRusumi: avtotransportVositasiRusumi.value,
            avtotransportVositasiTuri: avtotransportVositasiTuri.value,
            baholashObyektiJoylashganManzili: baholashObyektiJoylashganManzili.value,
            baholashObyektiningEgasi: baholashObyektiningEgasi.value,
            baholashdanMaqsad: baholashdanMaqsad.value
        }));
        myWindow.print()

        return false;
    

    function getPopulatedHTML(data) {
        let html = getHTML();
        for (key in data) {
            html = html.replace(`{{${key}}}`, data[key])
        }

        return html;
    }

    function getHTML() {
        return `<html>

        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="content-type">
            <style type="text/css">
                @import url(https://themes.googleusercontent.com/fonts/css?kit=m0tazYRimFnV1hoGKbgtnw);
        
                ol {
                    margin: 0;
                    padding: 0
                }
        
                table td,
                table th {
                    padding: 0
                }
        
                .c58 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 55.5pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c134 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 57.8pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c103 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 67.5pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c109 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 40.5pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c20 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 54pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c29 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 156pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c154 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 46.5pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c110 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 61.5pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c78 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 65.2pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c132 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 20.2pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c52 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 354pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c104 {
                    border-right-style: solid;
                    padding: 5pt 5pt 5pt 5pt;
                    border-bottom-color: #000000;
                    border-top-width: 1pt;
                    border-right-width: 1pt;
                    border-left-color: #000000;
                    vertical-align: top;
                    border-right-color: #000000;
                    border-left-width: 1pt;
                    border-top-style: solid;
                    border-left-style: solid;
                    border-bottom-width: 1pt;
                    width: 48pt;
                    border-top-color: #000000;
                    border-bottom-style: solid
                }
        
                .c9 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 10.5pt;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c10 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 13.5pt;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c75 {
                    margin-left: 10.8pt;
                    padding-top: 0.2pt;
                    text-indent: 35pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 64pt
                }
        
                .c85 {
                    margin-left: 15.3pt;
                    padding-top: 8.2pt;
                    text-indent: 35.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 60.1pt
                }
        
                .c39 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 8.5pt;
                    font-family: "Cambria";
                    font-style: normal
                }
        
                .c11 {
                    margin-left: 10.4pt;
                    padding-top: 2.3pt;
                    text-indent: 35pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 60.1pt
                }
        
                .c18 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 4.5pt;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c42 {
                    margin-left: 16.1pt;
                    padding-top: 4.5pt;
                    text-indent: 34.6pt;
                    padding-bottom: 0pt;
                    line-height: 1.5291666666666668;
                    text-align: center;
                    margin-right: 61.6pt
                }
        
                .c34 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 7.5pt;
                    font-family: "Cambria";
                    font-style: normal
                }
        
                .c27 {
                    margin-left: 16.4pt;
                    padding-top: 4.4pt;
                    text-indent: 27.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5083333333333335;
                    text-align: justify;
                    margin-right: 60.1pt
                }
        
                .c17 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-size: 1pt;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c127 {
                    margin-left: 36pt;
                    padding-top: 4.5pt;
                    text-indent: 36pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: left
                }
        
                .c51 {
                    margin-left: 15.8pt;
                    padding-top: 4.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 60.6pt
                }
        
                .c21 {
                    color: #000000;
                    font-weight: 400;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c43 {
                    padding-top: 4.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-indent: 36pt;
                    text-align: left;
                    height: 11pt
                }
        
                .c153 {
                    margin-left: 46.2pt;
                    padding-top: 4.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: left;
                    height: 11pt
                }
        
                .c4 {
                    margin-left: 46.2pt;
                    padding-top: 4.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    height: 11pt
                }
        
                .c130 {
                    margin-left: 216.1pt;
                    padding-top: 8.2pt;
                    padding-bottom: 4pt;
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: center
                }
        
                .c93 {
                    margin-left: 11.2pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2750000000000001;
                    text-align: left
                }
        
                .c155 {
                    padding-top: 7.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 60.3pt
                }
        
                .c111 {
                    margin-left: 16.6pt;
                    padding-top: 8.2pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c30 {
                    margin-left: 11.2pt;
                    padding-top: 0.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c115 {
                    padding-top: 0.5pt;
                    padding-bottom: 0.1pt;
                    line-height: 1.0;
                    text-align: left;
                    height: 11pt
                }
        
                .c44 {
                    padding-top: 7.9pt;
                    padding-bottom: 0pt;
                    line-height: 1.5291666666666668;
                    text-align: center;
                    margin-right: 104.3pt
                }
        
                .c77 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify;
                    margin-right: 61.6pt
                }
        
                .c23 {
                    margin-left: -0.8pt;
                    padding-top: 8.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c6 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left;
                    height: 11pt
                }
        
                .c48 {
                    padding-top: 4.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: left;
                    margin-right: 61.6pt
                }
        
                .c138 {
                    margin-left: 51pt;
                    padding-top: 0.8pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c7 {
                    padding-top: 0.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left;
                    height: 11pt
                }
        
                .c136 {
                    padding-top: 6.9pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: center;
                    margin-right: 30.4pt
                }
        
                .c144 {
                    color: #000000;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-family: "Arial";
                    font-style: normal
                }
        
                .c101 {
                    padding-top: 11.1pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: center;
                    margin-right: 30.3pt
                }
        
                .c107 {
                    margin-left: 11.8pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2750000000000001;
                    text-align: left
                }
        
                .c129 {
                    margin-left: 11.6pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2333333333333334;
                    text-align: left
                }
        
                .c71 {
                    margin-left: 11.6pt;
                    padding-top: 7.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c119 {
                    margin-left: 216.9pt;
                    padding-top: 0.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: center
                }
        
                .c143 {
                    margin-left: 11.8pt;
                    padding-top: 0.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c100 {
                    margin-left: 11.8pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2625;
                    text-align: left
                }
        
                .c122 {
                    margin-left: 15.9pt;
                    padding-top: 7.8pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c82 {
                    color: #2b2b2b;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c141 {
                    margin-left: 12pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2750000000000001;
                    text-align: left
                }
        
                .c149 {
                    margin-left: 10.9pt;
                    padding-top: 7.2pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c89 {
                    margin-left: 46.2pt;
                    padding-top: 4.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c126 {
                    padding-top: 5.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: center;
                    margin-right: 29.9pt
                }
        
                .c121 {
                    margin-left: 29.6pt;
                    padding-top: 0.2pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c151 {
                    margin-left: 46.9pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c108 {
                    margin-left: 5.6pt;
                    padding-top: 8.8pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c139 {
                    margin-left: 51pt;
                    padding-top: 8.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c73 {
                    margin-left: 301.8pt;
                    padding-top: 6.9pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c112 {
                    margin-left: 11.8pt;
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.2166666666666666;
                    text-align: left
                }
        
                .c145 {
                    margin-left: 11.8pt;
                    padding-top: 0.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.2458333333333333;
                    text-align: left
                }
        
                .c79 {
                    color: #000000;
                    text-decoration: none;
                    vertical-align: baseline;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c92 {
                    margin-left: 16.1pt;
                    padding-top: 8.5pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c72 {
                    padding-top: 0.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c62 {
                    background-color: #ffffff;
                    font-size: 8.5pt;
                    font-family: "Arial";
                    color: #202122
                }
        
                .c123 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c116 {
                    margin-left: -9pt;
                    border-spacing: 0;
                    border-collapse: collapse;
                    margin-right: auto
                }
        
                .c148 {
                    padding-top: 3.2pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c120 {
                    padding-top: 4.4pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c113 {
                    padding-top: 0.7pt;
                    padding-bottom: 0pt;
                    line-height: 1.2750000000000001;
                    text-align: left
                }
        
                .c63 {
                    padding-top: 6.3pt;
                    padding-bottom: 0pt;
                    line-height: 1.5;
                    text-align: justify
                }
        
                .c118 {
                    padding-top: 6.9pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: left
                }
        
                .c98 {
                    text-decoration: none;
                    vertical-align: baseline;
                    font-family: "Times New Roman";
                    font-style: normal
                }
        
                .c97 {
                    border-spacing: 0;
                    border-collapse: collapse;
                    margin-right: auto
                }
        
                .c133 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.3;
                    text-align: left
                }
        
                .c14 {
                    padding-top: 0pt;
                    padding-bottom: 0pt;
                    line-height: 1.0;
                    text-align: center
                }
        
                .c146 {
                    background-color: #ffffff;
                    max-width: 451.3pt;
                    padding: 72pt 72pt 72pt 72pt
                }
        
                .c45 {
                    text-decoration-skip-ink: none;
                    -webkit-text-decoration-skip: none;
                    text-decoration: underline
                }
        
                .c26 {
                    font-size: 9.5pt;
                    font-style: italic;
                    color: #494949
                }
        
                .c40 {
                    color: #262626;
                    font-size: 10.5pt
                }
        
                .c33 {
                    color: #181818;
                    font-size: 10.5pt
                }
        
                .c0 {
                    color: #232323;
                    font-size: 14pt
                }
        
                .c13 {
                    color: #494949;
                    font-size: 10pt
                }
        
                .c57 {
                    font-style: italic;
                    color: #313131
                }
        
                .c12 {
                    color: #161616;
                    font-size: 10.5pt
                }
        
                .c15 {
                    font-style: italic;
                    color: #3b3b3b
                }
        
                .c2 {
                    color: #111111;
                    font-size: 14pt
                }
        
                .c25 {
                    font-style: italic;
                    color: #212121
                }
        
                .c1 {
                    color: #282828;
                    font-size: 14pt
                }
        
                .c96 {
                    font-style: italic;
                    color: #565656
                }
        
                .c94 {
                    font-style: italic;
                    color: #64777e
                }
        
                .c81 {
                    color: #242424
                }
        
                .c156 {
                    color: #050505
                }
        
                .c159 {
                    margin-right: 31.2pt
                }
        
                .c84 {
                    color: #0a0a0a
                }
        
                .c54 {
                    color: #1a1a1a
                }
        
                .c106 {
                    color: #3a3a3a
                }
        
                .c99 {
                    color: #2d2d2d
                }
        
                .c90 {
                    color: #232323
                }
        
                .c105 {
                    color: #2a2a2a
                }
        
                .c16 {
                    font-size: 13.5pt
                }
        
                .c160 {
                    height: 23.9pt
                }
        
                .c102 {
                    color: #4f4f4f
                }
        
                .c150 {
                    font-size: 32.5pt
                }
        
                .c49 {
                    color: #3d3d3d
                }
        
                .c67 {
                    font-size: 10.5pt
                }
        
                .c37 {
                    color: #1f1f1f
                }
        
                .c125 {
                    color: #282828
                }
        
                .c128 {
                    font-size: 11.5pt
                }
        
                .c76 {
                    color: #313131
                }
        
                .c124 {
                    height: 1.5pt
                }
        
                .c36 {
                    color: #494949
                }
        
                .c66 {
                    font-size: 11pt
                }
        
                .c70 {
                    font-size: 10pt
                }
        
                .c46 {
                    color: #77b5b1
                }
        
                .c35 {
                    color: #1d1d1d
                }
        
                .c137 {
                    color: #565656
                }
        
                .c53 {
                    font-weight: 400
                }
        
                .c60 {
                    font-weight: 700
                }
        
                .c38 {
                    color: #181818
                }
        
                .c3 {
                    font-size: 14pt
                }
        
                .c69 {
                    color: #3b3b3b
                }
        
                .c158 {
                    color: #4d4d4d
                }
        
                .c74 {
                    height: 2.2pt
                }
        
                .c19 {
                    color: #080808
                }
        
                .c147 {
                    height: 12.4pt
                }
        
                .c68 {
                    color: #333333
                }
        
                .c24 {
                    color: #151515
                }
        
                .c88 {
                    color: #2b2b2b
                }
        
                .c83 {
                    font-size: 14.5pt
                }
        
                .c64 {
                    font-size: 12pt
                }
        
                .c117 {
                    font-style: italic
                }
        
                .c8 {
                    color: #131313
                }
        
                .c114 {
                    color: #4b4b4b
                }
        
                .c61 {
                    color: #262626
                }
        
                .c142 {
                    height: 5.2pt
                }
        
                .c22 {
                    color: #161616
                }
        
                .c140 {
                    height: 6pt
                }
        
                .c41 {
                    height: 0pt
                }
        
                .c56 {
                    font-size: 15pt
                }
        
                .c131 {
                    color: #d6d6d6
                }
        
                .c135 {
                    font-size: 8.5pt
                }
        
                .c152 {
                    color: #363636
                }
        
                .c59 {
                    color: #2f2f2f
                }
        
                .c80 {
                    color: #111111
                }
        
                .c32 {
                    color: #3f755d
                }
        
                .c65 {
                    color: #0e0e0e
                }
        
                .c91 {
                    color: #414141
                }
        
                .c95 {
                    color: #a8a8a8
                }
        
                .c28 {
                    color: #343434
                }
        
                .c87 {
                    font-size: 6.5pt
                }
        
                .c47 {
                    color: #212121
                }
        
                .c86 {
                    font-size: 7.5pt
                }
        
                .c55 {
                    color: #1c1c1c
                }
        
                .c5 {
                    color: #0c0c0c
                }
        
                .c50 {
                    font-size: 12.5pt
                }
        
                .c31 {
                    color: #0f0f0f
                }
        
                .c157 {
                    color: #cdcdcd
                }
        
                .title {
                    padding-top: 0pt;
                    color: #000000;
                    font-size: 36.5pt;
                    padding-bottom: 0pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    text-align: center
                }
        
                .subtitle {
                    padding-top: 18pt;
                    color: #666666;
                    font-size: 24pt;
                    padding-bottom: 4pt;
                    font-family: "Georgia";
                    line-height: 1.0;
                    page-break-after: avoid;
                    font-style: italic;
                    text-align: left
                }
        
                li {
                    color: #000000;
                    font-size: 11pt;
                    font-family: "Times New Roman"
                }
        
                p {
                    margin: 0;
                    color: #000000;
                    font-size: 11pt;
                    font-family: "Times New Roman"
                }
        
                h1 {
                    padding-top: 24pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 24pt;
                    padding-bottom: 6pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
        
                h2 {
                    padding-top: 18pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 18pt;
                    padding-bottom: 4pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
        
                h3 {
                    padding-top: 14pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 14pt;
                    padding-bottom: 4pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
        
                h4 {
                    padding-top: 12pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 12pt;
                    padding-bottom: 2pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
        
                h5 {
                    padding-top: 11pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 11pt;
                    padding-bottom: 2pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
        
                h6 {
                    padding-top: 10pt;
                    color: #000000;
                    font-weight: 700;
                    font-size: 10pt;
                    padding-bottom: 2pt;
                    font-family: "Times New Roman";
                    line-height: 1.0;
                    page-break-after: avoid;
                    text-align: left
                }
            </style>
        </head>
        
        <body class="c146 doc-content">
            <div>
                <p class="c6"><span class="c21 c66"></span></p>
            </div>
            <p class="c148"><span class="c16 c37 c60">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &ldquo;TASDIQLAYMAN&rdquo;</span></p>
            <h3 class="c130" id="h.xer9a2mvmtmw"><span class="c53">&nbsp; &nbsp; _________________________</span><span
                    class="c79 c60 c3">direktori</span></h3>
            <p class="c119"><span class="c90">(korxona </span><span class="c99">nomi)</span></p>
            <p class="c6"><span class="c21 c70"></span></p>
            <h3 class="c130" id="h.xf9bah3h1ls"><span class="c53">&nbsp;______________ &nbsp;________________</span></h3>
            <p class="c118"><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c64">imzo,
                    M.O&rsquo; </span><span>.</span><span class="c70">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </span><span class="c64">&nbsp; </span><span class="c64 c137">(rahbar </span><span
                    class="c64 c69">F.1.SH.)</span></p>
            <p class="c73"><span class="c128">&ldquo;</span><span class="c3">_____</span><span class="c128">&rdquo;</span><span
                    class="c16 c114">&nbsp;</span><span class="c3">&nbsp;__________</span><span class="c16 c114">20</span><span
                    class="c3">___</span><span class="c8 c16">yil</span></p>
            <p class="c6"><span class="c21 c56"></span></p>
            <p class="c6"><span class="c21 c56"></span></p>
            <p class="c6"><span class="c21 c56"></span></p>
            <p class="c6"><span class="c21 c56"></span></p>
            <p class="c101"><span class="c3">_________________________________________________</span><span class="c1">ga</span>
            </p>
            <p class="c136"><span class="c37 c3">(buyurtmachi </span><span class="c3 c106">nomi)</span></p>
            <p class="c126"><span class="c0">tegishli </span><span class="c3">________________________ </span><span
                    class="c3 c47">rusumli </span><span class="c3">_______________________</span><span
                    class="c3 c55">turdagi</span></p>
            <p class="c44"><span class="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span
                    class="c3">______________________</span><span class="c38 c3">davlat raqamli avto</span><span
                    class="c37 c3">transport </span><span class="c0">vositasini &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </span><span class="c37 c3">xarajat </span><span class="c3">yondashuvida </span><span class="c38 c3">baholash
                </span><span class="c2">bo&#39;yicha</span></p>
            <p class="c123 c159 title"><span class="c150 c47">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;HISOBOT</span></p>
            <p class="c6"><span class="c21 c70"></span></p>
            <p class="c115"><span class="c21 c86"></span></p><a id="t.d23efb1b0ba610c519d00e1c3ea00be5a581c6e5"></a><a
                id="t.0"></a>
            <table class="c97">
                <tr class="c142">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c145"><span class="c33">Hisobotni </span><span class="c67 c24">ro&#39;yxatga </span><span
                                class="c33">olish</span><span class="c67">&nbsp;ra</span><span class="c54 c67">qami</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{hisobotRoyhatiRaqami}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c30"><span class="c67 c37">Hisobot </span><span class="c54 c67">tuzilgan </span><span
                                class="c67 c55">sana</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{hisobotTuzilganSanasi}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c93"><span class="c67 c90">Baholash </span><span class="c54 c67">sanasi</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{baholashSanasi}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c100"><span class="c12">Baholash </span><span class="c54 c67">ob&#39;yekti:</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6"><span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c160">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c133"><span class="c67 c47">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-avtotransport
                            </span><span class="c67 c37">vositasi rusumi</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{avtotransportVositasiRusumi}}<span class="c17"></span></p>
                    </td>
                </tr>
                <tr class="c147">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c113"><span class="c67 c37">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-avtotransport
                            </span><span class="c105 c67">vositasi </span><span class="c67 c88">turi</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{avtotransportVositasiTuri}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c74">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c133"><span class="c40">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -avtotransport
                            </span><span class="c67 c35">vositasi</span></p>
                        <p class="c121"><span class="c90 c67">&nbsp; davlat </span><span class="c67 c8">raqami</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{avtotransportVositasiDavlatRaqami}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c129"><span class="c12">&nbsp; &nbsp; &nbsp; &nbsp; -baholash </span><span
                                class="c67 c53 c82">ob&rsquo;yekti </span></p>
                        <p class="c129"><span class="c67 c88">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span
                                class="c67 c47">joylashgan </span><span class="c67 c80">manz&icirc;li</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{baholashObyektiJoylashganManzili}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c140">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c112"><span class="c67 c37">Baholash </span><span class="c33">ob&#39;yektining </span><span
                                class="c67 c80">egas&icirc;</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{baholashObyektiningEgasi}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c124">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c143"><span class="c67 c35">Buyurtmach&icirc;</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{buyurtmachi}}<span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c141"><span class="c40">Aniqlanadigan </span><span class="c90 c67">qiymat </span><span
                                class="c33">turi</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6"><span class="c18"></span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c29" colspan="1" rowspan="1">
                        <p class="c107"><span class="c81 c67">Baholash </span><span class="c54 c67">maqsadi</span></p>
                    </td>
                    <td class="c52" colspan="1" rowspan="1">
                        <p class="c6">{{baholashdanMaqsad}}<span class="c18"></span></p>
                    </td>
                </tr>
            </table>
            <p class="c153"><span class="c21 c3"></span></p>
            <p class="c89"><span class="c21 c3">AVTOTRANSPORT VOSITASINI XARAJAT YONDASHUVIDA</span></p>
            <p class="c89"><span class="c21 c3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;BAHOLASH</span>
            </p>
            <p class="c4"><span class="c21 c3"></span></p>
            <p class="c120"><span class="c38 c3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{{avtotransportVositasiRusumi}}
                    &nbsp;rusumli &nbsp;{{avtotransportVositasiDavlatRaqami}} &nbsp;</span><span class="c3 c61">davlat &nbsp;</span><span
                    class="c0">raqamli</span></p>
            <p class="c108"><span class="c3 c131">. </span><span class="c3 c59">avtotransport </span><span
                    class="c3 c65">vositasining </span><span class="c3 c22">qiymatini </span><span class="c3 c47">xarajat
                </span><span class="c54 c3">yondashuvida </span><span class="c3 c65">aniqlash.</span></p>
            <p class="c11"><span class="c37 c3">Xarajatlar </span><span class="c3">bo&lsquo;yicha </span><span
                    class="c37 c3">baholashga </span><span class="c3 c8">yondashish, </span><span class="c3 c22">o&#39;xshash
                </span><span class="c3 c65">avtotransport </span><span class="c3 c55">vositalarining </span><span
                    class="c3">qiymatini </span><span class="c3 c22">mavjud </span><span class="c3 c55">avtotransport
                </span><span class="c3 c22">vositalarining </span><span class="c3 c47">qiymati </span><span class="c3 c59">bilan
                </span><span class="c37 c3">taqqoslashga </span><span class="c84 c3">asoslanadi. </span><span
                    class="c3 c5">Bunday </span><span class="c3 c22">yondashilganda </span><span class="c3 c8">o&lsquo;xshash
                </span><span class="c0">avtotransport </span><span class="c3 c68">vositalarining </span><span
                    class="c84 c3">joriy </span><span class="c3 c19">narx-navo </span><span class="c3 c31">bo&#39;yicha
                </span><span class="c35 c3">qiymati </span><span class="c3 c47">aniqlanadi, </span><span class="c35 c3">keyin
                </span><span class="c3 c88">esa </span><span class="c0">jamlangan </span><span class="c3 c8">eskirish
                </span><span class="c3">(jismoniy, </span><span class="c3 c24">funksiorial, </span><span class="c38 c3">tashqi)
                </span><span class="c84 c3">qiymatiga </span><span class="c99 c3">mos </span><span class="c3 c8">keluvchi
                </span><span class="c3 c55">miqdor </span><span class="c37 c3">chegirib </span><span class="c38 c3">tashlanadi,
                    &nbsp;</span><span class="c0">hosil &nbsp;</span><span class="c3 c5">bo&lsquo;lgan &nbsp;</span><span
                    class="c3 c31">qiymat &nbsp;</span><span class="c3 c19">baholanuvchi &nbsp;</span><span
                    class="c3 c22">avtotransport &nbsp;</span><span class="c35 c3">vositalarining </span><span
                    class="c2">qiymatini </span><span class="c3 c8">tashkil etadi.</span></p>
            <p class="c23"><span class="c21 c3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Avtotransport vositalarining
                    qiymatini xarajat yondashuvida aniqlashda</span></p>
            <p class="c23"><span class="c21 c3">buyurtmachi tomonidan taqdim etilgan hujjatlar to&rsquo;plami, bozor narxlari
                    hamda</span></p>
            <p class="c23"><span class="c21 c3">prays-listlarga asosan aniqlandi.</span></p>
            <p class="c72"><span class="c3 c54">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; __________________
                    &nbsp;ma&#39;lurnotnomalariga asosan, _______________________</span></p>
            <p class="c149"><span class="c3 c5">rusumli ______________________ turda </span><span class="c54 c3">avtotransport
                </span><span class="c3 c47">vositasining</span><span class="c3 c157">&nbsp;</span><span class="c3 c152">tiklash
                </span><span class="c3 c55">qiymati</span></p>
            <p class="c71"><span class="c38 c3">________________________ usulda </span><span class="c2">hisoblandi </span><span
                    class="c0">va</span><span class="c3">&nbsp;_____________</span><span class="c3 c95">&nbsp;</span><span
                    class="c76 c3">so&#39;mni </span><span class="c3 c68">tashkil qildi.</span><span
                    class="c21 c3">&nbsp;</span></p>
            <p class="c71"><span class="c3 c47">Xarajat </span><span class="c3">yondashuvida </span><span
                    class="c3 c31">avtotransport </span><span class="c54 c3">vositalarining </span><span class="c1">qiymatini
                </span><span class="c3 c28">aniqlashda </span><span class="c98 c53 c3 c61">jismoniy, </span></p>
            <p class="c71"><span class="c0">funksional </span><span class="c3 c5">(ma&#39;naviy), </span><span
                    class="c38 c3">tashqi (iqtisodiy) </span><span class="c3 c47">eskirishlaini </span><span
                    class="c3 c37">aniqlash </span><span class="c3 c28">zarurdir.</span></p>
            <p class="c75"><span class="c54 c60 c3">Jismoniy </span><span class="c2 c60">eskirish</span><span
                    class="c2">&nbsp;</span><span class="c84 c3">deganda, </span><span class="c3 c8">vaqt </span><span
                    class="c3 c105">o&#39;tishi </span><span class="c3 c28">bilan </span><span class="c54 c3">ekspluatatsiya
                </span><span class="c3 c91">qilish </span><span class="c3 c22">yoki </span><span class="c3 c69">bekor
                </span><span class="c1">turishi </span><span class="c3 c47">natijasida </span><span class="c3">asosiy
                </span><span class="c35 c3">konstruktiv </span><span class="c38 c3">elementlari </span><span class="c3 c99">va
                </span><span class="c54 c3">mexanizmlari </span><span class="c0">holatitining </span><span
                    class="c3 c84">yomonlashuvi </span><span class="c3 c156">tushuniladi. </span><span class="c3">Jismoniy
                </span><span class="c2">eskirish </span><span class="c38 c3">natijasida </span><span class="c0">konstruktiv
                </span><span class="c3 c22">elementlari </span><span class="c3 c76">va </span><span class="c1">butun
                </span><span class="c3 c55">avtotransport </span><span class="c38 c3">vositalarining </span><span
                    class="c3 c47">qiymati </span><span class="c3 c31">yo&#39;qolib </span><span class="c0">boradi.</span></p>
            <p class="c151"><span class="c3 c31">_______________ &nbsp;rusumli &nbsp;___________ </span><span class="c0">davlat
                </span><span class="c3 c61">raqamli </span><span
                    class="c1">avtotransport&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c3 c49">,</span>
            </p>
            <p class="c63"><span class="c54 c3">&nbsp; &nbsp;vositasi ____________ usulda </span><span class="c3 c47">aniqlangan
                </span><span class="c3 c5">jismoniy </span><span class="c1">eskirishi _____________</span><span
                    class="c21 c3">&nbsp; </span></p>
            <p class="c63"><span class="c3 c59">&nbsp; &nbsp;foiz </span><span class="c38 c3">miqdorida </span><span
                    class="c84 c3">qo&#39;llanildi.</span></p>
            <p class="c63"><span class="c3 c31">&nbsp; &nbsp; &nbsp; Funksional </span><span class="c3 c8">(ma&#39;naviy)
                </span><span class="c3 c24">eskirish </span><span class="c3 c158">&mdash; </span><span class="c3 c24">hajmiy,
                </span><span class="c38 c3">rejaviy </span><span class="c3 c47">va </span><span class="c0">konstruktiv
                </span><span class="c37 c53 c3 c98">yechimlar </span></p>
            <p class="c63"><span class="c105 c3">bo&#39;yicha </span><span class="c3 c55">zamonaviy </span><span
                    class="c3 c47">talab </span><span class="c38 c3">hamda davlat </span><span class="c3 c8">andozalariga
                </span><span class="c3 c28">mos </span><span class="c1">kelmaslikni </span><span
                    class="c3 c47">anglatadi.</span></p>
            <p class="c51"><span class="c3 c22">&nbsp;Ya&rsquo;</span><span class="c3 c102">ni </span><span
                    class="c1">avtotransport </span><span class="c3 c22">vositalari </span><span class="c0">ishlab </span><span
                    class="c3 c35">turaveradi, </span><span class="c54 c3">lekin </span><span class="c38 c3">zamonaviy
                </span><span class="c35 c3">ekspluatatsiya talablariga </span><span class="c3 c61">javob </span><span
                    class="c21 c3">bermaydi.</span></p>
            <p class="c77"><span class="c38 c3">____________________ &nbsp;rusumli ___________ </span><span class="c0">davlat
                </span><span class="c1">raqamli&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                    class="c37 c3">avtotransport</span></p>
            <p class="c155"><span
                    class="c1">vositasi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________________________________
                    &nbsp;</span><span class="c3 c47">sababli, </span><span class="c3 c61">funksional </span><span
                    class="c3 c81">eskirish</span></p>
            <p class="c122"><span class="c3 c38">_______ foiz </span><span class="c3">miqdorida </span><span
                    class="c3 c31">qo&#39;llanildi.</span></p>
            <p class="c85"><span class="c38 c3">Tashq</span><span class="c3 c31">i </span><span class="c3 c8">(iqtisodiy)
                    eskirish </span><span class="c3 c46">&mdash; </span><span class="c3 c55">avtotransport </span><span
                    class="c54 c3">vositalarining </span><span class="c3 c61">qiymatining </span><span class="c0">mazkur
                </span><span class="c3 c55">ob&#39;yektdan </span><span class="c3 c8">tashqi </span><span class="c3 c31">omillar
                </span><span class="c54 c3">ta&#39;siri </span><span class="c1">(shu </span><span class="c3 c55">jumladan,
                </span><span class="c3">bozordagi </span><span class="c3 c61">o&rsquo;zgarishlar, ijtimoiy, </span><span
                    class="c3">moliyaviy </span><span class="c37 c3">qonunchilik, </span><span class="c2">ekologik </span><span
                    class="c3 c61">va </span><span class="c3 c55">boshqa </span><span class="c35 c3">sharoitlarning </span><span
                    class="c3 c8">o&#39;zgarishi) </span><span class="c35 c3">natijasida </span><span
                    class="c21 c3">pasayishi.</span></p>
            <p class="c138"><span class="c54 c3">Baholanayotgan &nbsp;</span><span class="c3 c19">avtotransport v</span><span
                    class="c3 c8">ositasiga &nbsp;</span><span class="c3 c5">tashqi &nbsp;</span><span class="c0">(iqtisodiy)
                </span><span class="c3 c55">eskitish</span></p>
            <p class="c111"><span class="c2">_________________________ &nbsp;sababli ______ f</span><span class="c0">oiz
                </span><span class="c3 c55">miqdorida </span><span class="c3 c28">qo&lsquo;llanildi.</span></p>
            <p class="c139"><span class="c3">Baholanayotgan </span><span class="c2">avtotransport </span><span
                    class="c3 c65">vositalarining </span><span class="c3 c31">jamlangan </span><span class="c3 c55">eskirishi
                </span><span class="c38 c3">(jismoniy,</span></p>
            <p class="c92"><span class="c3">funksional, </span><span class="c3 c22">tashqi) </span><span class="c3 c5">quyidagi
                </span><span class="c3 c24">formulaga </span><span class="c0">muvofiq </span><span
                    class="c98 c53 c3 c55">aniqlanadi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
            <p class="c43"><span class="c21 c3"></span></p>
            <p class="c127"><span class="c3">E</span><span class="c70">jam</span><span class="c3">&nbsp;= (1- (1- </span><span
                    class="c36 c3">E</span><span class="c13">jis</span><span class="c3 c36">&nbsp;/ 100 </span><span
                    class="c3">)(1- </span><span class="c76 c3">E</span><span class="c76 c70">funk</span><span
                    class="c36 c3">&nbsp; / 100</span><span class="c3">)(1- </span><span class="c3 c69">E</span><span
                    class="c70 c69">tash</span><span class="c3 c69">&nbsp;</span><span class="c3 c15">/ 100) * 100</span></p>
            <p class="c48"><span class="c16 c25">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E</span><span
                    class="c25 c135">jam</span><span class="c25 c16">&nbsp;</span><span class="c16 c94">&mdash; </span><span
                    class="c16 c5">jamlangan </span><span class="c16 c80">eskirish </span><span class="c84 c16">foizi,
                </span><span class="c84 c16 c117">&nbsp;</span><span class="c16 c36 c117">E</span><span
                    class="c26">jis</span><span class="c16 c36">&nbsp; </span><span class="c16 c32">&mdash; </span><span
                    class="c16 c31">jismoniy </span><span class="c16 c55">eskirish, </span><span class="c16 c57">E</span><span
                    class="c57 c135">funk</span><span
                    class="c57 c16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c16 c125">&mdash;
                    funksional </span><span class="c16 c47">eskirish, &nbsp;</span><span class="c15 c16">E</span><span
                    class="c15 c135">tash </span><span class="c16 c96">- </span><span class="c99 c16">tashqi </span><span
                    class="c16 c31">eskirish.</span></p>
            <p class="c42"><span class="c21 c83">Avtotransport vositasining baholash qiymati hisobi</span></p>
            <p class="c7"><span class="c34"></span></p><a id="t.5d94298b237a3206768c7fa2359f429d0091e84e"></a><a id="t.1"></a>
            <table class="c116">
                <tr class="c41">
                    <td class="c132" colspan="1" rowspan="1">
                        <p class="c123"><span class="c53 c62">&#8470;</span></p>
                    </td>
                    <td class="c103" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Avtotransport vositasining rusumi</span></p>
                    </td>
                    <td class="c104" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Davlat raqami</span></p>
                    </td>
                    <td class="c20" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Ishlab chiqarilgan yili</span></p>
                    </td>
                    <td class="c154" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Tiklanish qiymati, so&rsquo;m</span></p>
                    </td>
                    <td class="c109" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Jismoniy eskirish, %</span></p>
                    </td>
                    <td class="c78" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Funksional eskirish, %</span></p>
                    </td>
                    <td class="c110" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Tashqi eskirish, %</span></p>
                    </td>
                    <td class="c58" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Jamlangan eskirish, %</span></p>
                    </td>
                    <td class="c134" colspan="1" rowspan="1">
                        <p class="c14"><span class="c39">Avtotransport vositasining baholash qiymati, so&rsquo;m</span></p>
                    </td>
                </tr>
                <tr class="c41">
                    <td class="c132" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c103" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c104" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c20" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c154" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c109" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c78" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c110" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c58" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                    <td class="c134" colspan="1" rowspan="1">
                        <p class="c6"><span class="c34"></span></p>
                    </td>
                </tr>
            </table>
            <p class="c7"><span class="c34"></span></p>
            <p class="c27"><span class="c54 c3">____________ &nbsp;rusumli _______________ </span><span class="c38 c3">davlat
                </span><span class="c1">raqamli </span><span class="c35 c3">avtotransport </span><span
                    class="c3 c8">vositasining </span><span class="c3 c19">xarajat </span><span class="c3 c8">yoodashuvida
                </span><span class="c2">baholangan </span><span class="c54 c3">qiymati _________________ </span><span
                    class="c3 c8">so&#39;m </span><span class="c90 c16">miqdorida </span><span
                    class="c16 c80">aniqiandi</span><span class="c56">.</span></p>
            <p class="c27"><span class="c0">Baholovchi </span><span
                    class="c0 c45">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </p>
        </body>
        
        </html>`
    }
});