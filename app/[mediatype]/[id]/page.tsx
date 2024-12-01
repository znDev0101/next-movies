export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="">
      <h1 className="text-center text-2xl text-white">Hello World</h1>
    </div>
  );
}
