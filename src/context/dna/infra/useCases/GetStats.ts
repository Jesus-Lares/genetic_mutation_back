import DNARepository from "../../application/dna.repository";
import { TypeAlgorithm } from "../../domain/DNA";

interface ResponseStats {
  count_mutation: number;
  count_no_mutation: number;
  ratio: number;
}

class GetStatsUseCase {
  async exec(typeAlgorithm?: TypeAlgorithm): Promise<ResponseStats> {
    const otherParams = {
      ...(typeAlgorithm && { typeAlgorithm }),
    };
    const countMutations = await this.countDnaRecord({
      isMutation: true,
      ...otherParams,
    });
    const countNoMutations = await this.countDnaRecord({
      isMutation: false,
      ...otherParams,
    });

    const ratio = countMutations / (countMutations + countNoMutations);

    return {
      count_mutation: countMutations,
      count_no_mutation: countNoMutations,
      ratio: ratio || 0,
    };
  }

  countDnaRecord(params: object) {
    const repository = new DNARepository();
    return repository.count({ where: params });
  }
}

export default GetStatsUseCase;
