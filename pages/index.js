import Link from 'next/link'

export default function Main({ data }) {
  return (
      <Link href="/">
      {data['funni']}
      </Link>
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
