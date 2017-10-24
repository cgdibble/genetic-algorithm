const { sortBy, sort, sum, map } = require('ramda')

const GEN_MAX_SIZE = 6
const CHROMOSOME_LENGTH = 10
const SELECTION_AMOUNT = GEN_MAX_SIZE / 2
const BREEDING_INDEX = CHROMOSOME_LENGTH / 2

const makeGeneration = (genSize) => {
  const chromosomes = []
  for (let i = 0; i <= genSize; i++) {
    chromosomes.push(getRandomGene())
  }
  return chromosomes
}

const getRandomGene = () => {
  const gene = []
  for (let i = 0; i < CHROMOSOME_LENGTH; i++) {
    gene.push(Math.round(Math.random()))
  }
  return gene
}

const fitness = (chromosomes) => {
  const sortedByScore = sort((c, next) => {
    return sum(next) - sum(c)
  }, chromosomes)
  const mapped = map(c => [sum(c), c], sortedByScore)
  return mapped
}

const selection = chromosomes => chromosomes.slice(0, SELECTION_AMOUNT)

const breed = chromosomes => {
  // [sum, chromosome]
  const newGeneration = []
  for (let i = 0; i < chromosomes.length - 1; i++) {
    const score = chromosomes[i][0]
    if (score === CHROMOSOME_LENGTH) return 'DERP DERP DERP'
    const currentC = chromosomes[i][1]
    const nextC = chromosomes[i + 1][1]
    const currentTail = currentC.slice(BREEDING_INDEX, currentC.length)
    const nextTail = nextC.slice(BREEDING_INDEX, nextC.length)
    console.log('currentTail:', currentTail)
    // const mergeCurrent = mergeTheChromosomes(currentC.splice(0, BREEDING_INDEX), nextTail)
    // const mergeTail = mergeTheChromosomes(nextC.splice(0, BREEDING_INDEX), currentTail)
    // newGeneration.push()
  }
}

const mergeTheChromosomes = (a, b) => [...a, ...b]
const current_gen = makeGeneration(GEN_MAX_SIZE)


// console.log('current_gen:', current_gen)
const sortedNShit = fitness(current_gen)
const selected = selection(sortedNShit)
console.log('selected:', selected)
const newGeneration = breed(selected)
