interface TagProps {
  tag: string;
}

const TagChips = ({ tag }: TagProps) => {
  return (
    <div className="border border-zinc-400  px-4 py-1 rounded-full mt-4">
      {tag}
    </div>
  );
};

export default TagChips;
