import ContentLoader from "react-content-loader";

export default function SkeletonCardServices() {
  return (
    <ContentLoader
      speed={6}
      style={{ borderRadius: "11px" }}
      width={1216}
      height={240}
      viewBox="0 0 1216 240"
      backgroundColor="#ddd"
      foregroundColor="#e8eaeb"
    >
      <rect x="0" y="-1" rx="0" ry="0" width="1216" height="240" />
    </ContentLoader>
  );
}
