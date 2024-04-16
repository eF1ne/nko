import "./style.css";
import { Page, Text, View, Document, StyleSheet, Font, usePDF, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import FontInterRegular from './vendor/fonts/Inter-Regular.ttf';

function Act() {

  Font.register({ family: 'Inter', src: FontInterRegular });

  const data = {
    numberAct: 11,
    day: 6,
    month: "апрель",
    year: 2024,
    address: "С. Дюпся Усть-Алданского района    ",
    customerNominative: "Петрова Мария Ивановна",
    customerGenitive: "Петровой Марии Ивановны",
    flatCustomer: "51",
    protocolDate: "01.12.2017 г.",
    protocolNumber: "125п",
    contractNumber: "36к",
    contractDate: "01.01.2018 г.",
    dateStart: "01.05.2023",
    dateFinish: "31.05.2023",
    totalNumber: 8250,
    totalString: "Восемь тысяч двести пятьдесят"
  }

  const dataService = [
    {
      serviceName: "Уборка территории (5 раз в неделю), а иногда даже чаще. И еще и по выходным и праздникам иногда)))",
      serviceCountOrfrequency: 1,
      serviceUnitOfMeasurement: "шт.",
      servicePrice: 8250,
      serviceTotal: 8250
    }
  ]

  const styles = StyleSheet.create({
    page: {
      marginTop: 20,
      backgroundColor: '#fff',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
      marginLeft: 30,
      marginRight: 20,
    },
    textCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30
    },
    tableHeader: {
      display: 'flex',
      flexDirection: "row",
      marginTop: 10,
      height: 130,
      marginLeft: 30,
      marginRight: 30
    },
    tableCellOfHeader: {
      textAlign: "center",
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: "#000",
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderLeftColor: "#000",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "#000",
      paddingLeft: 10,
      paddingRight: 10
    },
    tableRow: {
      display: 'flex',
      flexDirection: "row",
      heihgt: 100,
      marginLeft: 30,
      marginRight: 30
    },
    tableCell: {
      textAlign: "center",
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderLeftColor: "#000",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "#000",
      paddingLeft: 10,
      paddingRight: 10
    }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.textCenter]}>
          <Text>
            Решение № {data.numberAct}
          </Text>
          <Text style={{textAlign: "center"}}>
            ОБ УЧРЕЖДЕНИИ НЕГОСУДАРСТВЕННОГО ОБРАЗОВАТЕЛЬНОГО ЧАСТНОГО УЧРЕЖДЕНИЯ ДОПОЛНИТЕЛЬНОГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ АВТОШКОЛА «АВТО+»
          </Text>
        </View>
        <View style={{ marginTop: 10, marginRight: 20, marginLeft: 30, flexDirection: "center"}}>
          <Text style={{ textAlign: "left" }}>
            {data.address}
          </Text>
          <Text style={{ textAlign: "right" }}>
            «{data.day}» {data.month} {data.year} г.
          </Text>
        </View>

        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
          Я, гражданин Алексеев Гаврил Семенович, паспорт серии 98 02 № 591785, 
          выдан Усть-Алданским РОВД Республики Саха (Якутия) от 25 марта 2002 г., код подр. 142-034, 
          зарегистрирован по адресу: 678362, Республика Саха (Якутия), Усть-Алданский улус (район), 
          с. Дюпся ул. Соловьева 23, являясь единственным участником Негосударственного образовательного частного учреждения автошкола «Авто+»
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 30, marginRight: 30 }}>
          <Text>
          Повестка дня:
          </Text>
          <Text>1. Создание Автономной некоммерческой организации Учебный центр «Профессионал».</Text>
          <Text>2. Утверждение Устава Автономной некоммерческой организации Учебный центр «Профессионал».</Text>
          <Text>3. Избрание единоличного исполнительного органа Автономной некоммерческой организации Учебный центр «Профессионал» и членов контрольно-ревизионного органа.</Text>
          <Text> 4. Избрание членов правления высшего коллегиального органа Автономной некоммерческой организации Учебный центр «Профессионал».</Text>
          <Text>5. Избрание  членов попечительского совета Автономной некоммерческой организации Учебный центр «Профессионал».</Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 15, marginRight: 30 }}>
          <Text>
          Слушали: По  вопросам повестки дня  выступил председатель собрания Матвеева И.А.
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 15, marginRight: 30 }}>
          <Text>
          Решили:
          </Text>
          <Text>1. Создать Автономную некоммерческую организацию Учебный центр «Профессионал».
</Text>
          <Text>2. Утвердить Устав Автономной некоммерческой организации Учебный центр «Профессионал».
.</Text>
          <Text>3. Избрать Директором Автономной некоммерческой организации Учебный центр «Профессионал» Матвееву Ирину Алексеевну, членом  контрольно-ревизионного органа – Ефремова Руслана Романовича.
</Text>
          <Text>4. Избрать членами высшего коллегиального органа Автономной некоммерческой организации Учебный центр «Профессионал» Ефремова Руслана Романовича …..
</Text>
          <Text>5. Избрать членами попечительского совета</Text>
        </View>
      </Page>
    </Document>
  );
}

function App() {
  // eslint-disable-next-line
    const [instance, setInstance] = usePDF({ document: Act });
  
    return (
      <div className="container">
        <div className="container__frame">
          <PDFViewer>
            <Act />
          </PDFViewer>
        </div>
  
        <PDFDownloadLink document={<Act />} fileName="somename.pdf" className="container__link-download">
          {({ blob, url, loading, error }) =>
            loading ? 'Документ загружается...' : 'Экспорт'
          }
        </PDFDownloadLink>
  
      </div>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);