import type { Skill } from '../types'
import { SkillColumn } from './SkillColumn'

type Props = {
  skills: Skill[]
  onDepthChange: (id: number, depth: number) => void
}

export function VisualizationCanvas({ skills, onDepthChange }: Props) {
  return (
    <div className="relative mb-16 rounded-[3rem] border border-white/5 bg-black/20 p-8 shadow-2xl md:p-16">
      <div className="overflow-x-auto">
        <div className="relative flex min-w-[1000px] items-start justify-between gap-0 h-[520px]">
          <div className="absolute left-4 right-4 top-[80px] z-10 h-px bg-white/30" />

          {skills.map((skill) => (
            <SkillColumn
              key={skill.id}
              skill={skill}
              onDepthChange={onDepthChange}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
