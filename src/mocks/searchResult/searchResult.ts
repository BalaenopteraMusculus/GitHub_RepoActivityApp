import { REPOSITORY_LIST } from '../repository/repository';
import { SearchResult } from '../../models/searchResult/searchResult.interface';

const repoList = REPOSITORY_LIST;
const resultList: SearchResult[] = [];

repoList.forEach((repo) => {
    resultList.push({repository: repo})
})

export const RESULT_LIST = resultList;