import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

export default function useBreedList(animal) {
  const results = useQuery(['breeds', animal], fetchBreedList);
  const breedList = results?.data?.breeds ?? [];
  return [breedList, results.status];
}
