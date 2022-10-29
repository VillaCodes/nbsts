function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    }
  ]
}

const [st1getter, st1setter] = simpleState(10)
console.log(st1getter());
st1setter(62);
console.log(st1getter())

//overriding inferred generic type by specifying possible param types next to function
//<> is generic syntax

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("dog");
console.log(st2getter());

//generic interface

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  interface Rank{
    item: RankItem;
    rank: number;
  }
  
  const ranks = items.map((item) => ({
    item, 
    rank: rank(item),
  }))

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  }, 
  {
    name: "Charmander",
    hp: 18,
  }
]

const ranks = ranker(pokemon, ({hp}) => hp)
console.log(ranks)