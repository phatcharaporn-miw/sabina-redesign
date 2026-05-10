import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ProductList from "../components/ProductList";
import RecentView from "../components/RecentView";


export default function Home() {
  return (
      <main className="min-h-screen">
      <Navbar />
      <PageHeader />
      <ProductList />
      <RecentView />
      </main>

  );
}
