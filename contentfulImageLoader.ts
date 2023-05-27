interface Loader {
  src: string;
}

export default function loader({ src }: Loader) {
  return `https:${src}?q=75`;
}
