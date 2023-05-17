export default function Page({ params }: { params: { id: string } }) {
  return <div>page {params.id}</div>;
}
