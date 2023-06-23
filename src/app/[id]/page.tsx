import Shoe from '../../components/Shoe/Shoe'

interface PageShoeProps {
  params: {
    id: string
  }
}

export default function PageShoe({ params }: PageShoeProps) {
  return <Shoe params={params} />
}
