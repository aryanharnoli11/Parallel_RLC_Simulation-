const audioModules = import.meta.glob([
  '../audios/*.wav',
  '../walkthrough/audios/*.wav',
], {
  eager: true,
  import: 'default',
  query: '?url',
})

const audioUrlsByName = new Map()

// Treat harmless punctuation differences before ".wav" as the same name.
// This keeps recordings such as "terminal 6 to terminal 10..wav" usable when
// the guide config refers to the cleaner "terminal 6 to terminal 10.wav".
const normalizeAudioName = (fileName) => fileName
  .trim()
  .toLowerCase()
  .replace(/\.wav$/i, '')
  .replace(/[.\s]+$/g, '')
  .replace(/\s+/g, ' ')

Object.entries(audioModules).forEach(([path, url]) => {
  const fileName = path.split('/').pop()

  audioUrlsByName.set(fileName, url)
  audioUrlsByName.set(fileName.toLowerCase(), url)
  audioUrlsByName.set(normalizeAudioName(fileName), url)
})

const isDirectAudioUrl = (source) => /^(?:https?:|blob:|data:|\/)/i.test(source)

export const resolveAudioAsset = (source) => {
  if (!source || source === '#') {
    return null
  }

  if (isDirectAudioUrl(source)) {
    return source
  }

  return audioUrlsByName.get(source)
    ?? audioUrlsByName.get(source.toLowerCase())
    ?? audioUrlsByName.get(normalizeAudioName(source))
    ?? null
}
