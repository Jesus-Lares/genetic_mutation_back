import DNARepository from "../../application/dna.repository";
import { TypeAlgorithm } from "../../domain/DNA";

class CreateAdnRecordUseCase {
  exec(dnaRecord: { sequence: string[]; isMutation: boolean; typeAlgorithm: TypeAlgorithm }) {
    const repository = new DNARepository();
    return repository.create(dnaRecord);
  }
}

export default CreateAdnRecordUseCase;
