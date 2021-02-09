package boot.cresterida.me.demo.repositories;

import boot.cresterida.me.demo.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project,Long> {

    Project findByProjectIdentifier(String projectIdentifier);
}
