import { useLoaderData } from "react-router-dom"
import PropTypes from "prop-types"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { scaleOrdinal } from "d3-scale"
import { schemeCategory10 } from "d3-scale-chromatic"
import { getReadlist } from "../../helper/local-storage"

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`

const TriangleBar = props => {
  const { fill, x, y, width, height } = props
  return (
    <path
      d={getPath(x, y, width, height)}
      stroke="none"
      fill={fill}
    />
  )
}

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
}

const PagesToRead = () => {
  const booksData = useLoaderData()
  const readBookIds = getReadlist()
  const readBooks = booksData.filter(book => readBookIds.includes(book.bookId))

  const chartValue = readBooks.map(book => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: 2400,
    amt: 2400,
  }))

  const colors = scaleOrdinal(schemeCategory10).range()

  return (
    <div className="container">
      <div className="p-16 rounded-xl bg-neutral-100">
        <ResponsiveContainer
          width="100%"
          height={500}
        >
          <BarChart
            data={chartValue}
            strokeDasharray="3 3"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dx={-20} />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartValue.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % 20]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default PagesToRead
