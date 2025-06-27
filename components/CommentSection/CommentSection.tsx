import React from 'react'

type CommentSectionProps = {
  slug: string;
};

export default function CommentSection({ slug }: CommentSectionProps) {  return (
    <div>
      comment section {slug}
    </div>
  )
}