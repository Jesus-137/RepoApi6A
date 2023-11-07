import { Media } from "../domain/Media";
import { MediaRepository } from "../domain/MediaRepository";

export class CreateMediaUseCase {
  constructor(readonly mediaRepo: MediaRepository) {}

  async run(
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise<Media | null> {
    try {
      const user = await this.mediaRepo.createMedia(
        co2,
        ch4,
        ph,
        conductividad
      );
      return user;
    } catch (error) {
      return null;
    }
  }
}
