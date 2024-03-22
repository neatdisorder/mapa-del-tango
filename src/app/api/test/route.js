export async function GET(request) {
  /* const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  */

  const res = await fetch(
    `https://api.notion.com/v1/databases/4f553a42344f47f3b75517ca630e5aa2/query`,
    {
      method: "POST",
      headers: {
        "Notion-Version": "2022-06-28",
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      },
    }
  );

  const database = await res.json();

  return Response.json({ database });
}
