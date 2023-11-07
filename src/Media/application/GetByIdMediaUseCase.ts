import { Media } from "../domain/Media";
import { MediaRepository } from "../domain/MediaRepository";

export class GetByIdMediaUseCase {
  constructor(readonly mediaRepo: MediaRepository) {}

  async run(id: number): Promise<Media | null> {
    try {
      const result = await this.mediaRepo.getById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}
