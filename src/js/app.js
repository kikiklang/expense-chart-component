import dataSet from '../../data/data.json'

const chartContainer = document.querySelector('.expense-chart')
const maxAmount = Math.max(...dataSet.map(o => o.amount))
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
const d = new Date()
const dayName = days[d.getDay()]

for (const day of dataSet) {
  const newDiv = document.createElement('div')
  const newDetail = document.createElement('div')
  const newBar = document.createElement('div')
  const newLabel = document.createElement('p')

  newDiv.className = 'expense-chart-day'

  newDetail.className = 'expense-chart-detail'
  newDetail.innerHTML = `$${day.amount}`

  newBar.className = 'expense-chart-bar'
  newBar.style.height = `${(150 * day.amount) / maxAmount}px`
  newBar.addEventListener('mouseenter', () => {
    newDetail.style.display = 'flex'
  })
  newBar.addEventListener('mouseleave', () => {
    newDetail.style.display = 'none'
  })
  if (day.day === dayName) {
    newBar.style.backgroundColor = 'hsl(186deg 34% 60%)'
  }

  newLabel.className = 'expense-chart-label'
  newLabel.innerHTML = day.day

  chartContainer.append(newDiv)
  newDiv.append(newDetail)
  newDiv.append(newBar)
  newDiv.append(newLabel)
}

