import TransactionCard from "../../../global-component/card/transaction-card/TransactionCard";
import dataTransaction from "../constant";

export default function SemuaTransaksi() {
  // console.log(dataTransaction);
  return (
    <div>
      <TransactionCard transaksi={dataTransaction} />
    </div>
  );
}
