import styles from 'App.module.scss';
import Spending from "components/spending/Spending.component";
import TotalBalance from "components/total-balance/TotalBalance.component";

function App() {
  console.log(styles)
  return (
    <main>
      <TotalBalance/>
      <Spending />
    </main>
  );
}

export default App;
