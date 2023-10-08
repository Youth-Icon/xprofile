interface TagProps {
  tag: string;
}

const TagChips = ({ tag }: TagProps) => {
  return (
    <div className="border border-zinc-400  px-3.5 pt-1 pb-1.5 rounded-full">
      {tag}
    </div>
  );
};

export default TagChips;
