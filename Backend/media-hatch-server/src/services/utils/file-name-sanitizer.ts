import { Media } from 'media-hatch-core';
import sanitize from 'sanitize-filename';

export class FileNameSanitizer {
	public static sanitizeName(media: Media): string {
		return sanitize(media.name, { replacement: ' ' });
	}

	public static sanitizeFullName(media: Media): string {
		return sanitize(media.fullName, { replacement: ' ' });
	}
}
