export default function Main({ data }) {
  return (
      <p>
      {data['funni']}
      </p>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch("https://cope.schizo.cf/api/funny");
    const data = await res.json();

    return {
      props: {
          data
      }
    }
}