CREATE TABLE "Tag" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "Status" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "Role" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "Category" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "Type" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "id_role" int,
  "firstname" varchar,
  "lastname" varchar,
  "socialname" varchar,
  "gender" varchar,
  "age" int,
  "email" varchar,
  "image" varchar,
  "description" varchar,
  "preferred_lang" varchar
);

CREATE TABLE "Reader" (
  "id" SERIAL PRIMARY KEY,
  "id_user" int,
  "is_blocked" boolean,
  "ipaddr" varchar,
  "email" varchar
);

CREATE TABLE "Page" (
  "id" SERIAL PRIMARY KEY,
  "id_user" int,
  "id_status" int,
  "id_type" int,
  "title" varchar,
  "summary" varchar,
  "content" varchar,
  "url" varchar,
  "datetime_added" datetime,
  "datetime_edited" datetime,
  "datetime_published" datetime,
  "datetime_removed" datetime
);

CREATE TABLE "Post" (
  "id" SERIAL PRIMARY KEY,
  "id_user" int,
  "id_status" int,
  "id_category" int,
  "id_tag" int,
  "id_type" int,
  "title" varchar,
  "summary" varchar,
  "content" varchar,
  "url" varchar,
  "slug" varchar,
  "datetime_added" datetime,
  "datetime_edited" datetime,
  "datetime_published" datetime,
  "datetime_removed" datetime,
  "is_comment_enabled" boolean,
  "id_reader_reaction" int
);

CREATE TABLE "Comment" (
  "id" SERIAL PRIMARY KEY,
  "id_post" int,
  "id_reader" int,
  "id_parent" int,
  "id_children" int,
  "id_status" int,
  "title" varchar,
  "content" varchar,
  "datetime_added" datetime,
  "datetime_edited" datetime,
  "datetime_published" datetime,
  "datetime_removed" datetime,
  "is_comment_enabled" boolean
);

CREATE TABLE "Comment_Reaction" (
  "id_reader" int,
  "id_comment" int,
  "comment_liked" int,
  "comment_disliked" int
);

CREATE TABLE "Post_Reaction" (
  "id_reader" int,
  "id_post" int,
  "post_liked" int,
  "post_disliked" int
);

ALTER TABLE "User" ADD FOREIGN KEY ("id_role") REFERENCES "Role" ("id");

ALTER TABLE "User" ADD FOREIGN KEY ("id") REFERENCES "Reader" ("id_user");

ALTER TABLE "Page" ADD FOREIGN KEY ("id_user") REFERENCES "User" ("id");

ALTER TABLE "Page" ADD FOREIGN KEY ("id_status") REFERENCES "Status" ("id");

ALTER TABLE "Page" ADD FOREIGN KEY ("id_type") REFERENCES "Type" ("id");

ALTER TABLE "Post" ADD FOREIGN KEY ("id_user") REFERENCES "User" ("id");

ALTER TABLE "Post" ADD FOREIGN KEY ("id_status") REFERENCES "Status" ("id");

ALTER TABLE "Post" ADD FOREIGN KEY ("id_type") REFERENCES "Type" ("id");

ALTER TABLE "Post" ADD FOREIGN KEY ("id_category") REFERENCES "Category" ("id");

ALTER TABLE "Post" ADD FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("id_post") REFERENCES "Post" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("id_status") REFERENCES "Status" ("id");

ALTER TABLE "Comment" ADD FOREIGN KEY ("id") REFERENCES "Comment" ("id_parent");

ALTER TABLE "Comment" ADD FOREIGN KEY ("id") REFERENCES "Comment" ("id_children");

ALTER TABLE "Comment_Reaction" ADD FOREIGN KEY ("id_comment") REFERENCES "Comment" ("id");

ALTER TABLE "Comment_Reaction" ADD FOREIGN KEY ("id_reader") REFERENCES "Reader" ("id");

ALTER TABLE "Post_Reaction" ADD FOREIGN KEY ("id_post") REFERENCES "Post" ("id");

ALTER TABLE "Post_Reaction" ADD FOREIGN KEY ("id_reader") REFERENCES "Reader" ("id");
