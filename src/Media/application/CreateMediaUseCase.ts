import { Media } from "../domain/Media.ts";
import { MediaRepository } from "../domain/MediaRepository.ts";

export class CreateMediaUseCase {
  constructor(readonly mediaRepo: MediaRepository) {}

  async run(
    id_user: number,
    co2: number,
    ch4: number,
    ph: number,
    conductividad: number
  ): Promise<Media | null> {
    try {
      const user = await this.mediaRepo.createMedia(
        id_user,
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
