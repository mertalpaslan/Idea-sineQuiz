using Microsoft.EntityFrameworkCore.Migrations;

namespace sineQuiz.Migrations
{
    public partial class Adddescriptiontoquiz : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Quizzes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Quizzes");
        }
    }
}
