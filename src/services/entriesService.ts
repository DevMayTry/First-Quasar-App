import useApi from 'src/composables/UseApi'

export default function entriesService () {
  const { listEntries } = useApi()

  return {
    list: listEntries
  }
}
