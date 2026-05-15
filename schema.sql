create table schools (
  id uuid primary key,
  name text not null,
  city text not null,
  state text not null,
  region text not null,
  subscription_status text not null default 'trial',
  created_at timestamptz not null default now()
);

create table users (
  id uuid primary key,
  school_id uuid references schools(id),
  role text not null check (role in ('student', 'teacher', 'admin')),
  full_name text not null,
  email text,
  phone text,
  class_name text,
  section text,
  group_name text check (group_name in ('Group 1', 'Group 2', 'Group 3') or group_name is null),
  created_at timestamptz not null default now()
);

create table modules (
  id uuid primary key,
  title text not null,
  term int not null check (term in (1, 2)),
  sequence int not null,
  subject text not null,
  group_name text not null check (group_name in ('Group 1', 'Group 2', 'Group 3')),
  class_name text not null,
  material_url text,
  material_type text check (material_type in ('pdf', 'ppt', 'pptx', 'doc', 'docx') or material_type is null),
  material_summary text,
  published_at timestamptz
);

create table questions (
  id uuid primary key,
  module_id uuid references modules(id),
  question_type text not null,
  prompt text not null,
  media_url text,
  options jsonb not null default '[]',
  correct_answer text not null,
  answer_case_sensitive boolean not null default false,
  explanation text,
  difficulty text not null,
  created_at timestamptz not null default now()
);

create table quizzes (
  id uuid primary key,
  module_id uuid references modules(id),
  title text not null,
  quiz_type text not null check (quiz_type in ('baseline', 'module', 'summative', 'showcase')),
  duration_seconds int not null,
  published_at timestamptz
);

create table quiz_questions (
  quiz_id uuid references quizzes(id),
  question_id uuid references questions(id),
  sequence int not null,
  marks numeric not null default 1,
  primary key (quiz_id, question_id)
);

create table quiz_attempts (
  id uuid primary key,
  quiz_id uuid references quizzes(id),
  student_id uuid references users(id),
  score numeric not null,
  accuracy numeric not null,
  average_answer_seconds numeric not null,
  submitted_at timestamptz not null default now()
);

create table qq_scores (
  id uuid primary key,
  student_id uuid references users(id),
  academic_year text not null,
  term int check (term in (1, 2)),
  accuracy numeric not null,
  speed numeric not null,
  consistency numeric not null,
  improvement_trend numeric not null,
  participation numeric not null,
  qq numeric not null,
  calculated_at timestamptz not null default now()
);

create table report_cards (
  id uuid primary key,
  student_id uuid references users(id),
  academic_year text not null,
  term int not null check (term in (1, 2)),
  qq_score_id uuid references qq_scores(id),
  teacher_comment text,
  pdf_url text,
  generated_at timestamptz not null default now()
);
