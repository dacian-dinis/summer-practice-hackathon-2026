import { Users } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TeamMember = {
  id: string;
  name: string;
  photoUrl: string | null;
  skill: number;
};

type TeamBalanceProps = {
  members: TeamMember[];
  sportName: string;
};

type Team = {
  members: TeamMember[];
  totalSkill: number;
};

function balanceTeams(members: TeamMember[]): [Team, Team] {
  const sorted = [...members].sort((a, b) => b.skill - a.skill);
  const teamA: Team = { members: [], totalSkill: 0 };
  const teamB: Team = { members: [], totalSkill: 0 };

  for (const member of sorted) {
    if (
      teamA.totalSkill < teamB.totalSkill ||
      (teamA.totalSkill === teamB.totalSkill && teamA.members.length <= teamB.members.length)
    ) {
      teamA.members.push(member);
      teamA.totalSkill += member.skill;
    } else {
      teamB.members.push(member);
      teamB.totalSkill += member.skill;
    }
  }

  return [teamA, teamB];
}

function teamAverage(team: Team): string {
  if (team.members.length === 0) return "—";
  return (team.totalSkill / team.members.length).toFixed(1);
}

export function TeamBalance({ members, sportName }: TeamBalanceProps): JSX.Element | null {
  if (members.length < 4) {
    return null;
  }

  const [teamA, teamB] = balanceTeams(members);
  const skillDelta = Math.abs(teamA.totalSkill - teamB.totalSkill);

  return (
    <Card className="rounded-md border-2 border-brand-ink bg-white shadow-none dark:border-neutral-50 dark:bg-neutral-950">
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" variant="secondary">
            <Users className="mr-1 h-3.5 w-3.5" />
            Skill-balanced split
          </Badge>
          <Badge className="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300" variant="secondary">
            Δ {skillDelta} skill points
          </Badge>
        </div>
        <CardTitle className="text-xl">Suggested teams</CardTitle>
        <CardDescription>
          Auto-balanced by skill so {sportName} stays competitive. Captain can override on the day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "Team A", team: teamA, accent: "bg-brand text-white" },
            { label: "Team B", team: teamB, accent: "bg-bluebold text-white" },
          ].map(({ label, team, accent }) => (
            <div
              className="rounded-md border-2 border-brand-ink p-4 dark:border-neutral-700"
              key={label}
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge className={`${accent} font-bold uppercase tracking-wider`}>{label}</Badge>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  Avg skill {teamAverage(team)}
                </div>
              </div>
              <ul className="space-y-2">
                {team.members.map((member) => (
                  <li className="flex items-center justify-between gap-3" key={member.id}>
                    <div className="flex items-center gap-2">
                      <Avatar
                        className="h-8 w-8"
                        fallbackClassName="bg-neutral-200 text-xs font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100"
                        name={member.name}
                        src={member.photoUrl}
                      />
                      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{member.name}</span>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">⭐ {member.skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
