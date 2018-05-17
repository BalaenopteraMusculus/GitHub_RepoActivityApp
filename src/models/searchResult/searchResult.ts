import { Repository } from "../repository/repository";
import { CommitRate } from "../commitRate/commitRate";

export interface SearchResult {
    repository: Repository;
    commitRate: CommitRate;
}