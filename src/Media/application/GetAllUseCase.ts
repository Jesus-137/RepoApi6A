import { Media } from "../domain/Media";
import { MediaRepository } from "../domain/MediaRepository";

export class GetAllUseCase {
  constructor(readonly mediaRepo: MediaRepository) {}

  async run(): Promise<Media[] | null> {
    try {
      const result = await this.mediaRepo.getAll();
      return result;
    } catch (error) {
      return null;
    }
  }
}