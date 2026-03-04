import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Activity from "./components/Activity/Activity"
import Experience from "./components/Experience/Experience"
import Advanteges from "./components/Advantages/Advanteges"
import History from "./components/Home/History"
import Structure from "./components/Home/Structure"
import Management from "./components/Home/Management"
import Vacancies from "./components/Home/Vacancies"
import Projects from "./components/Activity/Projects"
import Tenders from "./components/Activity/Tenders"
import Tender1 from "./components/Activity/TenderPages/Tender1"
import Tender2 from "./components/Activity/TenderPages/Tender2"
import Tender3 from "./components/Activity/TenderPages/Tender3"
import Tender4 from "./components/Activity/TenderPages/Tender4"
import Tender5 from "./components/Activity/TenderPages/Tender5"
import Tender6 from "./components/Activity/TenderPages/Tender6"
import CorpManage from "./components/Experience/CorpManage"
import SignFacts from "./components/Experience/SignFacts"
import SignFact2024 from "./components/Experience/SignFactsPages/SignFact2024"
import SignFact2023 from "./components/Experience/SignFactsPages/SignFact2023"
import SignFact2022 from "./components/Experience/SignFactsPages/SignFact2022"
import SignFact2021 from "./components/Experience/SignFactsPages/SignFact2021"
import SignFact2020 from "./components/Experience/SignFactsPages/SignFact2020"
import SignFact2019 from "./components/Experience/SignFactsPages/SignFact2019"
import Reports from "./components/Experience/Reports"
import FXDTable from "./components/Experience/FXDTable"
import Faces from "./components/Experience/Faces"
import Stratagy from "./components/Experience/Stratagy"
import BusinessPlan from "./components/Experience/BusinessPlan"
import Prospect from "./components/Experience/Prospect"
import AutditConc from "./components/Experience/AutditConc"
import DividentInfo from "./components/Experience/DividentInfo"
import BusinessPlanDoing from "./components/Experience/BusinessPlanDoing"
import VotingResults from "./components/Experience/VotingResults"
import BudgetDist from "./components/Experience/BudgetDist"


function App() {

  return (
    <Router>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/structure" element={<Structure/>}/>
        <Route path="/management" element={<Management/>}/> 
        <Route path="/vacancies" element={<Vacancies/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tenders" element={<Tenders/>}/>
        <Route path="/exp" element={<Experience/>}/> 
        <Route path="/corp-manage" element={<CorpManage/>}/>
        <Route path="/significant-facts" element={<SignFacts/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/fxd-table" element={<FXDTable/>}/>
        <Route path="/faces" element={<Faces/>}/>
        <Route path="/stratagy" element={<Stratagy/>}/>
        <Route path="/business-plan" element={<BusinessPlan/>}/> 
        <Route path="/prospect" element={<Prospect/>}/> 
        <Route path="/autdit-conclusion" element={<AutditConc/>}/>
        <Route path="/divident-info" element={<DividentInfo/>}/>
        <Route path="/business-plan-doing" element={<BusinessPlanDoing/>}/>
        <Route path="/voting-results" element={<VotingResults/>}/>
        <Route path="/budget-distribution" element={<BudgetDist/>}/>
        <Route path="/adv" element={<Advanteges/>}/>
        <Route path="/tender1" element={<Tender1/>}/>
        <Route path="/tender2" element={<Tender2/>}/>
        <Route path="/tender3" element={<Tender3/>}/>
        <Route path="/tender4" element={<Tender4/>}/>
        <Route path="/tender5" element={<Tender5/>}/>
        <Route path="/tender6" element={<Tender6/>}/>
        <Route path="/sign-fact2024" element={<SignFact2024/>}/>
        <Route path="/sign-fact2023" element={<SignFact2023/>}/>
        <Route path="/sign-fact2022" element={<SignFact2022/>}/>
        <Route path="/sign-fact2021" element={<SignFact2021/>}/>
        <Route path="/sign-fact2020" element={<SignFact2020/>}/>
        <Route path="/sign-fact2019" element={<SignFact2019/>}/>
       </Routes>
       <Footer/>
    </Router>
  )
} 
// Emitent-report = Квартальные отчеты эммитента
// Year-report = Годовые и квартальные отчеты
// CBRF-report = Отчеты ЦКР РЦБ
// IFRS-report = Отчеты МСФО
// RPI-report = Перечень КПЭ
// KU-report = Оценка КУ
export default App
